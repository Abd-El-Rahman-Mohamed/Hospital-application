CREATE TABLE Doctor (
  DoctorID INT PRIMARY KEY AUTO_INCREMENT,
  FullName VARCHAR(255) NOT NULL,
  Specialization VARCHAR(255),
  PhoneNumber VARCHAR(20)
);

CREATE TABLE Treatment (
  TreatmentID INT PRIMARY KEY AUTO_INCREMENT,
  Description TEXT NOT NULL,
  TreatmentCost DECIMAL(10,2) NOT NULL
);

CREATE TABLE Room (
  RoomID INT PRIMARY KEY AUTO_INCREMENT,
  Type ENUM('General', 'Operation Theater', 'ICU') NOT NULL,
  RoomCostPerDay DECIMAL(10,2) NOT NULL
);

CREATE TABLE Patient (
  PatientID INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  Address TEXT,
  gender CHARACTER,
  PhoneNumber VARCHAR(20),
  Admitted BOOLEAN DEFAULT FALSE,
  AdmissionDate DATE,
  DischargeDate DATE,
  TotalDays INT GENERATED ALWAYS AS (DATEDIFF(DischargeDate, AdmissionDate)),
  RoomID INT,
  FOREIGN KEY (RoomID) REFERENCES Room(RoomID)
);

CREATE TABLE Nurse (
  NurseID INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  PhoneNumber VARCHAR(20)
);

CREATE TABLE Ward_boy (
  WardboyID INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  PhoneNumber VARCHAR(20)
);

CREATE TABLE Patient_Treatment (
  PatientID INT NOT NULL,
  TreatmentID INT NOT NULL,
  PRIMARY KEY (PatientID, TreatmentID),
  FOREIGN KEY (PatientID) REFERENCES Patient(PatientID),
  FOREIGN KEY (TreatmentID) REFERENCES Treatment(TreatmentID)
);

CREATE TABLE Patient_Doctor (
  PatientID INT NOT NULL,
  DoctorID INT NOT NULL,
  PRIMARY KEY (PatientID, DoctorID),
  FOREIGN KEY (PatientID) REFERENCES Patient(PatientID),
  FOREIGN KEY (DoctorID) REFERENCES Doctor(DoctorID)
);

CREATE TABLE Room_Boywards (
  WardboyID INT NOT NULL,
  RoomID INT NOT NULL,
  PRIMARY KEY (WardboyID, RoomID),
  FOREIGN KEY (WardboyID) REFERENCES Ward_boy(WardboyID),
  FOREIGN KEY (RoomID) REFERENCES Room(RoomID)
);

CREATE TABLE Room_Nurses (
  NurseID INT NOT NULL,
  RoomID INT NOT NULL,
  PRIMARY KEY (NurseID, RoomID),
  FOREIGN KEY (NurseID) REFERENCES Nurse(NurseID),
  FOREIGN KEY (RoomID) REFERENCES Room(RoomID)
);

CREATE TABLE Patient_Disease (
  disease TEXT NOT NULL,
  PatientID INT NOT NULL,
  PRIMARY KEY (disease(255), PatientID),
  FOREIGN KEY (PatientID) REFERENCES Patient(PatientID)
);

CREATE TABLE Bill (
  BillID INT PRIMARY KEY AUTO_INCREMENT,
  PatientID INT,
  RoomID INT,
  TreatmentID INT,
  RoomCostPerDay DECIMAL(10,2),
  TotalDays INT,
  TotalTreatmentCost DECIMAL(10,2)
  TotalCost DECIMAL(10,2),
  FOREIGN KEY (PatientID) REFERENCES Patient(PatientID),
  FOREIGN KEY (RoomID) REFERENCES Room(RoomID)
);


-- Update the TotalTreatmentCost column in the Bill table with the total sum of treatment costs for each patient
UPDATE Bill AS b
JOIN (
    SELECT pt.PatientID, SUM(t.TreatmentCost) AS TotalCost
    FROM Patient_Treatment pt
    JOIN Treatment t ON pt.TreatmentID = t.TreatmentID
    GROUP BY pt.PatientID
) AS treatment_totals ON b.PatientID = treatment_totals.PatientID
SET b.TotalTreatmentCost = treatment_totals.TotalCost;




-- Trigger
DELIMITER //

CREATE TRIGGER calculateTotalCost BEFORE INSERT ON Bill
FOR EACH ROW
BEGIN
  -- Set the RoomID in Bill table to be the same as in the Patient table
  SET NEW.RoomID = (SELECT RoomID FROM Patient WHERE PatientID = NEW.PatientID);

  -- Set other columns as before
  SET NEW.RoomCostPerDay = (SELECT RoomCostPerDay FROM Room WHERE RoomID = NEW.RoomID);
  SET NEW.TotalDays = DATEDIFF((SELECT DischargeDate FROM Patient WHERE PatientID = NEW.PatientID), (SELECT AdmissionDate FROM Patient WHERE PatientID = NEW.PatientID));

  SET NEW.TotalTreatmentCost = (
    SELECT COALESCE(SUM(t.TreatmentCost), 0)
    FROM Patient_Treatment pt
    JOIN Treatment t ON pt.TreatmentID = t.TreatmentID
    WHERE pt.PatientID = NEW.PatientID
  );

  SET NEW.TotalCost = NEW.RoomCostPerDay * NEW.TotalDays + NEW.TotalTreatmentCost;
END;
//

DELIMITER ;

