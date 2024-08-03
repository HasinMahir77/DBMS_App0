CREATE DATABASE dbms_g5;
USE dbms_g5;

-- Create Person table
CREATE TABLE Person (
    Nid BIGINT PRIMARY KEY,
    FName VARCHAR(50),
    LName VARCHAR(50),
    DobD INT,
    DobM INT,
    DobY INT,
    House VARCHAR(50),
    Street VARCHAR(50),
    area VARCHAR(50),
    PostalCode VARCHAR(10),
    Division VARCHAR(50),
    District VARCHAR(50),
    Type VARCHAR(50)
);

-- Create Caretaker table
CREATE TABLE Caretaker (
    CaretakerNid BIGINT PRIMARY KEY,
    FOREIGN KEY (CaretakerNid) REFERENCES Person(Nid)
);

-- Create Elderly table
CREATE TABLE Elderly (
    ElderlyNid BIGINT PRIMARY KEY,
    CaretakerNid BIGINT,
    FOREIGN KEY (ElderlyNid) REFERENCES Person(Nid),
    FOREIGN KEY (CaretakerNid) REFERENCES Caretaker(CaretakerNid)
);

-- Create Physician table
CREATE TABLE Physician (
    PhysicianNid BIGINT PRIMARY KEY,
    LicenseNo VARCHAR(50),
    VCenterId BIGINT
);

-- Create PhysicianCertificate table
CREATE TABLE PhysicianCertificate (
    PCertificateNo BIGINT PRIMARY KEY,
    PhysicianNid BIGINT,
    Degree VARCHAR(50),
    Institution VARCHAR(50),
    Year INT,
    FOREIGN KEY (PhysicianNid) REFERENCES Physician(PhysicianNid)
);

-- Create MedicalHistory table
CREATE TABLE MedicalHistory (
    MhId BIGINT PRIMARY KEY,
    ElderlyNid BIGINT,
    MedicalCondition VARCHAR(100),
    Recommendation VARCHAR(100),
    FOREIGN KEY (ElderlyNid) REFERENCES Elderly(ElderlyNid)
);
-- Create VaccinationCenter table
CREATE TABLE VaccinationCenter (
    CenterId BIGINT PRIMARY KEY,
    Name VARCHAR(100),
    MaxCapacity INT,
    Address VARCHAR(100)
);
-- Create Appointment table
CREATE TABLE Appointment (
    AppointmentId BIGINT PRIMARY KEY,
    ElderlyNid BIGINT,
    CaretakerNid BIGINT,
    TimeH INT,
    TimeM INT,
    DateD INT,
    DateM INT,
    DateY INT,
    VCenterId BIGINT,
    PhysicianNid BIGINT,
    FOREIGN KEY (ElderlyNid) REFERENCES Elderly(ElderlyNid),
    FOREIGN KEY (CaretakerNid) REFERENCES Caretaker(CaretakerNid),
    FOREIGN KEY (VCenterId) REFERENCES VaccinationCenter(CenterId),
    FOREIGN KEY (PhysicianNid) REFERENCES Physician(PhysicianNid)
);

-- Create Vaccine table
CREATE TABLE Vaccine (
    VaccineId BIGINT PRIMARY KEY,
    Brand VARCHAR(50),
    Name VARCHAR(50),
    Disease VARCHAR(50),
    Doses INT,
    Efficacy DECIMAL(5,2),
    ProdDate DATE,
    ExDate DATE
);

-- Create Contraindication table
CREATE TABLE Contraindication (
    VaccineId BIGINT,
    Situation VARCHAR(100),
    PRIMARY KEY (VaccineId, Situation),
    FOREIGN KEY (VaccineId) REFERENCES Vaccine(VaccineId)
);

-- Create SideEffect table
CREATE TABLE SideEffect (
    VaccineId BIGINT,
    Effect VARCHAR(100),
    PRIMARY KEY (VaccineId, Effect),
    FOREIGN KEY (VaccineId) REFERENCES Vaccine(VaccineId)
);

-- Create VaccinationTime table
CREATE TABLE VaccinationTime (
    VaccinationId BIGINT PRIMARY KEY,
    Date DATE,
    Time TIME
);



-- Create VaccinationCertificate table
CREATE TABLE VaccinationCertificate (
    VaccinationId BIGINT PRIMARY KEY,
    ElderlyNid BIGINT,
    VaccineId BIGINT,
    CenterId BIGINT,
    FOREIGN KEY (ElderlyNid) REFERENCES Elderly(ElderlyNid),
    FOREIGN KEY (VaccineId) REFERENCES Vaccine(VaccineId),
    FOREIGN KEY (CenterId) REFERENCES VaccinationCenter(CenterId)
);
-- Create Local Health Authority table
CREATE TABLE LocalHealthAuthority (
    LhaAddress VARCHAR(100) PRIMARY KEY,
    Coverage VARCHAR(100),
    PhoneNo VARCHAR(20)
);
-- Create Supply table
CREATE TABLE Supply (
    SupplyId BIGINT PRIMARY KEY,
    LhaAddress VARCHAR(100),
    VaccineId BIGINT,
    CenterId BIGINT,
    Quantity INT,
    DispatchDate DATE,
    ArrivalDate DATE,
    FOREIGN KEY (VaccineId) REFERENCES Vaccine(VaccineId),
    FOREIGN KEY (CenterId) REFERENCES VaccinationCenter(CenterId),
    FOREIGN KEY (LhaAddress) REFERENCES LocalHealthAuthority(LhaAddress)
);

-- Create Campaign table
CREATE TABLE Campaign (
    CampaignId BIGINT PRIMARY KEY,
    BeginningDate DATE,
    AdminNid BIGINT,
    EndDate DATE,
    StartTime TIME,
    EndTime TIME
);

-- Create CampaignCenter table
CREATE TABLE CampaignCenter (
    CampaignId BIGINT,
    CenterId BIGINT,
    PRIMARY KEY (CampaignId, CenterId),
    FOREIGN KEY (CampaignId) REFERENCES Campaign(CampaignId),
    FOREIGN KEY (CenterId) REFERENCES VaccinationCenter(CenterId)
);

-- Create DghsAdmin table
CREATE TABLE DghsAdmin (
    AdminNid BIGINT PRIMARY KEY
);
