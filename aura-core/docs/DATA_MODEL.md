# Aura Core V1.0.0 Data Model

> **Entity Relationship Diagram (ERD)**
> Visualizing the relationships between Identity, Master Data, Inventory, and History.

```mermaid
classDiagram
    %% =========================================================
    %% Domain: Identity (User & Client)
    %% =========================================================
    class User {
        +UUID id
        +string email
        +string name
        +string createdAt
    }

    class ClientProfile {
        +UUID id
        +UUID userId
        +string name
        +Gender gender
        +SkinTone skinTone
        +boolean isPregnantOrNursing
        +BaumannScores baumannScores
        +Concern[] concerns
        +WannabeGoal[] goals
    }

    %% =========================================================
    %% Domain: Master Data (Immutable Definitions)
    %% =========================================================
    class Treatment {
        +string id
        +string name
        +string category
        +MethodType methodType
        +SafetyLevel safetyLevel
        +PriceRange priceRange
    }

    class Hospital {
        +string id
        +string name
        +HospitalLocation location
        +HospitalContact contact
    }

    %% =========================================================
    %% Domain: Inventory (Crawled Data)
    %% =========================================================
    class HospitalProduct {
        +string id
        +string hospitalId
        +string treatmentId
        +string name
        +number price
        +string url
        +HospitalProductOption[] options
        +string crawledAt
    }

    %% =========================================================
    %% Domain: History (Logs)
    %% =========================================================
    class AnalysisRecord {
        +UUID id
        +UUID clientId
        +DateISO timestamp
        +ClientProfile inputSnapshot
        +DiagnosisResult resultSnapshot
    }

    class DiagnosisResult {
        +string baumannType
        +SafetyFlag[] safetyFlags
        +Treatment[] finalRecommendations
    }

    %% =========================================================
    %% Relationships
    %% =========================================================
    User "1" --o "*" ClientProfile : Manages (Family/Self)
    
    ClientProfile "1" --o "*" AnalysisRecord : History Log
    
    Hospital "1" --* "*" HospitalProduct : Sells
    
    Treatment "1" ..o "*" HospitalProduct : Is mapped to (Optional)
    
    AnalysisRecord *-- DiagnosisResult : Contains
    
    DiagnosisResult --> Treatment : Recommends
```

## Description

### 1. Identity (`User` vs `ClientProfile`)
- **User:** The account holder (login credential). Can manage multiple profiles.
- **ClientProfile:** The actual patient context. Contains biometric data (`SkinTone`, `Gender`) and dynamic preferences (`PainTolerance`).

### 2. Market Data (`Treatment` vs `HospitalProduct`)
- **Treatment:** The abstract concept (e.g., "Ulthera"). Contains **Medical Logic** (`painLevel`, `safetyLevel`).
- **HospitalProduct:** The concrete item sold by a hospital (e.g., "S-Eye Ulthera 300 shots"). Contains **Market Logic** (`price`, `promotion`).
- **Crawler Job:** Fetches `HospitalProduct` and attempts to link it to a `Treatment` via `treatmentId`.

### 3. History (`AnalysisRecord`)
- Stores a snapshot of the `ClientProfile` at the time of analysis to ensure reproducibility even if the user's condition changes later.
