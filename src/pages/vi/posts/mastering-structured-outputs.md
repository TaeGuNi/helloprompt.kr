---
layout: ../../../layouts/BlogPost.astro
title: Làm Chủ Đầu Ra Có Cấu Trúc (JSON): Tích Hợp LLM Vào Hệ Thống Của Bạn
date: 2026-02-13
description: Tìm hiểu cách kiểm soát hoàn hảo đầu ra của LLM ở định dạng JSON để tích hợp đáng tin cậy vào các ứng dụng. Hướng dẫn toàn diện từ kỹ thuật prompt đến cài đặt API.
---

Các Mô hình Ngôn ngữ Lớn (LLM) rất giỏi làm thơ, kể chuyện cười và tham gia vào các cuộc tranh luận triết học. Nhưng với tư cách là nhà phát triển, khi chúng ta cố gắng tích hợp LLM vào các ứng dụng trong thế giới thực, chúng ta gặp phải một bức tường lớn: **"Văn bản phi cấu trúc."**

Backend Python hoặc frontend JavaScript của tôi không muốn LLM nói: "Chắc chắn rồi! Đây là dữ liệu bạn yêu cầu:", theo sau là văn bản. Chúng chỉ muốn **JSON** sạch, có thể phân tích cú pháp.

Bài đăng này bao gồm các chiến lược chính để có được Đầu ra Có Cấu trúc (Structured Outputs) đáng tin cậy từ LLM.

## Tại sao Đầu ra Có Cấu trúc lại Quan trọng?

Để sử dụng LLM cho nhiều mục đích hơn là chỉ chatbot, bạn cần kết nối trí thông minh của mô hình với các hệ thống phần mềm hiện có.
- **Tự động hóa:** Phân tích nội dung email để tự động tạo vé trong CRM.
- **Trích xuất dữ liệu:** Trích xuất ngày tháng, con người và sự kiện từ các bài báo để lưu vào DB.
- **Kết xuất giao diện người dùng:** Ánh xạ nội dung được tạo tới các thành phần trang web cụ thể (thẻ, danh sách, v.v.).

Trong tất cả các quy trình này, JSON đóng vai trò là Ngôn ngữ chung (Lingua Franca) giữa AI và mã.

## Chiến lược 1: System Prompting Mạnh mẽ

Phương pháp cơ bản nhất là thực thi tính cách và định dạng đầu ra trong system prompt. Bạn cần hướng dẫn cụ thể hơn là chỉ "Đưa cho tôi JSON".

```text
Bạn là một trợ lý trích xuất dữ liệu. Phân tích đầu vào của người dùng và xuất ra theo lược đồ JSON sau.
Không bao gồm bất kỳ giải thích nào khác hoặc các khối mã markdown (```json). Chỉ xuất chuỗi JSON thô.

{
  "summary": "string",
  "sentiment": "positive | negative | neutral",
  "keywords": ["string"]
}
```

**Mẹo quan trọng:** Hướng dẫn "Không sử dụng các khối mã markdown" rất quan trọng. Nhiều mô hình thường gói đầu ra trong \`\`\`json ... \`\`\`, điều này đòi hỏi phải xử lý hậu kỳ thêm trong quá trình phân tích cú pháp.

## Chiến lược 2: Học One-Shot (Cung cấp ví dụ)

Nếu mô hình không hiểu lược đồ, việc hiển thị một ví dụ còn tốt hơn một trăm lời giải thích.

**User:**
```text
Phân tích đánh giá sau: "Giao hàng thực sự nhanh, nhưng chất lượng thấp hơn mong đợi."
```

**Assistant:**
```json
{
  "summary": "Giao hàng nhanh, chất lượng thấp",
  "sentiment": "mixed",
  "tags": ["delivery", "quality"]
}
```

Bằng cách đưa một ví dụ vào lịch sử trò chuyện hoặc lời nhắc, mô hình sẽ nắm bắt ngay lập tức: "À, đây là giọng điệu và định dạng tôi nên sử dụng."

## Chiến lược 3: Tận dụng các Tính năng API Gốc (Chế độ JSON & Định dạng Phản hồi)

Các mô hình hiện đại cung cấp các tính năng cấp API để thực thi đầu ra có cấu trúc mà không chỉ dựa vào kỹ thuật prompt.

### OpenAI & Others
GPT-4o của OpenAI và các mô hình mới hơn hỗ trợ tham số `response_format={"type": "json_object"}`. Sử dụng điều này buộc mô hình tạo ra JSON hợp lệ không có lỗi cú pháp. Gần đây, `json_schema` cho phép xác định các cấu trúc thậm chí còn chặt chẽ hơn (Chế độ nghiêm ngặt).

### Google Gemini
Gemini cũng cho phép xác định `response_schema` để kiểm soát định dạng đầu ra. Điều này đảm bảo mô hình tuân thủ nghiêm ngặt các trường và loại được xác định trong lược đồ.

## Những cạm bẫy cần tránh

1.  **Dấu phẩy ở cuối (Trailing Commas):** Tiêu chuẩn JSON không cho phép dấu phẩy sau mục cuối cùng trong danh sách hoặc đối tượng. Tuy nhiên, LLM thường mắc lỗi này. Nếu trình phân tích cú pháp JSON của bạn hỗ trợ chế độ khoan dung (lenient mode), bạn vẫn ổn, nhưng nếu không, lỗi có thể xảy ra.
2.  **Bao gồm nhận xét:** JSON tiêu chuẩn không hỗ trợ nhận xét. Bạn phải cảnh báo mô hình không thêm nhận xét như `// giải thích`.
3.  **Ảo giác (Hallucination):** Một định dạng hoàn hảo không đảm bảo nội dung trung thực. Ngay cả dữ liệu có cấu trúc cũng luôn yêu cầu xác thực.

## Kết luận

Đầu ra có cấu trúc là công nghệ cốt lõi giúp phát triển LLM từ đồ chơi thành công cụ.
Bắt đầu với kỹ thuật prompt và trong môi trường sản xuất, hãy tận dụng các tính năng mô hình gốc (Chế độ JSON, Gọi công cụ, v.v.) để đảm bảo tính ổn định.

Giờ đây, các ứng dụng của bạn có thể có cả sự sáng tạo của AI và sự ổn định của mã.
