# Video Generation Prompting

## Mechanics of Video Prompting (Sora, Veo, etc.)

Video generation models like Sora and Veo operate on diffusion transformers or similar architectures that treat video as a sequence of spacetime patches. Prompting for these models requires a shift from static image description to dynamic temporal description.

Key elements include:

- **Subject Persistence:** Ensuring the main subject remains consistent across frames.
- **Temporal Flow:** Describing how actions unfold over time (e.g., "gradually accelerates," "morphs into").
- **Atmosphere & Lighting:** How light interacts with moving objects.

## Camera Control Parameters

Unlike static images, video prompts often support specific camera terminology to direct the viewer's gaze:

- **Pan/Tilt/Roll:** Moving the camera on its axis.
- **Truck/Dolly:** Moving the entire camera through space.
- **Zoom:** Changing focal length (optical) or cropping (digital).
- **Rack Focus:** Shifting focus from foreground to background.
- **FPS & Motion Blur:** Specifying frame rates or stylistic motion artifacts.

## Physics & Continuity

Generative video often struggles with object permanence and realistic physics. Prompts can help mitigate this by:

- Explicitly stating interactions (e.g., "The ball deform slightly upon impact").
- Defining material properties (e.g., "rigid," "fluid," "cloth-like physics").
- Enforcing continuity in transitions.

## TRANSLATIONS

### KR

비디오 생성 프롬프팅 메커니즘 (Sora, Veo 등)

- 카메라 제어 매개변수
- 물리 및 연속성

### JP

ビデオ生成プロンプトの仕組み (Sora, Veo など)

- カメラ制御パラメータ
- 物理学と連続性

### ES

Mecánica de las indicaciones para generación de video (Sora, Veo, etc.)

- Parámetros de control de cámara
- Física y continuidad

### FR

Mécanique des prompts pour la génération vidéo (Sora, Veo, etc.)

- Paramètres de contrôle de la caméra
- Physique et continuité

### DE

Mechanik des Video-Generierungs-Promptings (Sora, Veo, etc.)

- Kamerasteuerungsparameter
- Physik & Kontinuität

### CN

视频生成提示机制（Sora、Veo 等）

- 相机控制参数
- 物理与连续性
