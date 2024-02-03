const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hospital",
});
connection.connect();

const crud = {
    findAll: (T_Name) => {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM ${T_Name};`;
            connection.query(sql, (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    },
    
    findByID: (T_Name, ID_ToFind) => {
        return new Promise((resolve, reject) => {
            
            let id_column = "";
            
            const singleIDs = ["Bill", "Doctor", "Nurse", "Patient", "Room", "Treatment", "Wardboy"];
            const relationIDs = ["Patient_Disease", "Patient_Doctor", "Patient_Treatment", "Room_Boywards", "Room_Nurses"];
            
            if (singleIDs.includes(T_Name)) id_column = T_Name+"ID";
            else if (relationIDs.includes(T_Name) ) {
                id_column = T_Name.slice(0, T_Name.indexOf('_'))+"ID";
                console.log(id_column);
            }

            let sql = `SELECT * FROM ${T_Name} WHERE ${id_column} = ${ID_ToFind};`;
            connection.query(sql, (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    },

    insertNew: async (T_Name, values) => {
        try {
            await new Promise((resolve, reject) => {
                let sql = "";
                switch (T_Name) {
                    case "Bill":
                        sql = `INSERT INTO Bill (PatientID) VALUES (${Number(values[0])});`;
                        break;
                    case "Doctor":
                        sql = `INSERT INTO Doctor (FullName, Specialization, PhoneNumber) VALUES ("${values[0]}", "${values[1]}", "${values[2]}");`;
                        break;
                    case "Nurse":
                        sql = `INSERT INTO Nurse (firstName, lastName, PhoneNumber) VALUES ("${values[0]}", "${values[1]}", "${values[2]}");`;
                        break;
                    case "Patient":
                        sql = `INSERT INTO Patient (firstName, lastName, Address, gender, PhoneNumber, Admitted, AdmissionDate, DischargeDate, RoomID) VALUES ("${values[0]}", "${values[1]}", "${values[2]}", '${values[3].charAt(0)}', "${values[4]}", ${Number(values[5])}, "${values[6]}", "${values[7]}", ${Number(values[8])});`;
                        break;
                    case "Patient_Disease":
                        sql = `INSERT INTO Patient_Disease (PatientID, disease) VALUES (${Number(values[0])}, "${values[1]}");`;
                        break;
                    case "Patient_Doctor":
                        sql = `INSERT INTO Patient_Doctor (PatientID, DoctorID) VALUES (${Number(values[0])}, ${Number(values[1])});`;
                        break;
                    case "Patient_Treatment":
                        sql = `INSERT INTO Patient_Treatment (PatientID, TreatmentID) VALUES (${Number(values[0])}, ${Number(values[1])});`;
                        break;
                    case "Room":
                        sql = `INSERT INTO Room (Type, RoomCostPerDay) VALUES ("${values[0]}", ${Number(values[1])});`;
                        break;
                    case "Room_Boywards":
                        sql = `INSERT INTO Room_Boywards (RoomID, WardboyID) VALUES (${Number(values[0])}, ${Number(values[1])});`;
                        break;
                    case "Room_Nurses":
                        sql = `INSERT INTO Room_Nurses (RoomID, NurseID) VALUES (${Number(values[0])}, ${Number(values[1])});`;
                        break;
                    case "Treatment":
                        sql = `INSERT INTO Treatment (Description, TreatmentCost) VALUES ("${values[0]}", ${Number(values[1])});`;
                        break;
                    case "Wardboy":
                        sql = `INSERT INTO Wardboy (firstName, lastName, PhoneNumber) VALUES ("${values[0]}", "${values[1]}", "${values[2]}");`;
                        break;
                }
                connection.query(sql, (err, rows) => {
                    if (err) reject(err);
                    else resolve(rows);
                });
            });
        }
        catch (err) { return 'Error: ' + err.sqlMessage; };
    },
    
    updateByID: async (T_Name, id, idsecond, values) => {
        try {
            await new Promise((resolve, reject) => {
                let sql = "";
                switch (T_Name) {
                    case "Doctor":
                        sql = `UPDATE Doctor SET FullName='${values[0]}', Specialization='${values[1]}', PhoneNumber='${values[2]}' WHERE DoctorID=${id};`
                        break;
                    case "Nurse":
                        sql = `UPDATE Nurse SET firstName='${values[0]}', lastName='${values[1]}', PhoneNumber='${values[2]}' WHERE NurseID=${id};`
                        break;
                    case "Patient":
                        sql = `UPDATE Patient SET firstName='${values[0]}', lastName='${values[1]}', Address='${values[2]}', gender='${values[3]}', PhoneNumber='${values[4]}', Admitted=${Number(values[5])}, AdmissionDate='${values[6]}', DischargeDate='${values[7]}', RoomID=${Number(values[8])} WHERE PatientID=${id};`
                        break;
                    case "Patient_Disease":
                        sql = `UPDATE Patient_Disease SET PatientID=${Number(values[0])}, disease='${values[1]}' WHERE PatientID=${id} AND disease='${idsecond}';`
                        break;
                    case "Patient_Doctor":
                        sql = `UPDATE Patient_Doctor SET PatientID=${Number(values[0])}, DoctorID=${Number(values[1])} WHERE PatientID=${id} AND DoctorID=${idsecond};`
                        break;
                    case "Patient_Treatment":
                        sql = `UPDATE Patient_Treatment SET PatientID=${Number(values[0])}, TreatmentID=${Number(values[1])} WHERE PatientID=${id} AND TreatmentID=${idsecond};`
                        break;
                    case "Room":
                        sql = `UPDATE Room SET Type='${values[0]}', RoomCostPerDay=${Number(values[1])} WHERE RoomID=${id};`
                        break;
                    case "Room_Boywards":
                        sql = `UPDATE Room_Boywards SET RoomID=${Number(values[0])}, WardboyID=${Number(values[1])} WHERE RoomID=${id} AND WardboyID=${idsecond};`
                        break;
                    case "Room_Nurses":
                        sql = `UPDATE Room_Nurses SET RoomID=${Number(values[0])}, NurseID=${Number(values[1])} WHERE RoomID=${id} AND NurseID=${idsecond};`
                        break;
                    case "Treatment":
                        sql = `UPDATE Treatment SET Description='${values[0]}', TreatmentCost=${Number(values[1])} WHERE TreatmentID=${id};`
                        break;
                    case "Wardboy":
                        sql = `UPDATE Wardboy SET firstName='${values[0]}', lastName='${values[1]}', PhoneNumber='${values[2]}' WHERE WardboyID=${id};`;
                        break;
                }
                connection.query(sql, (err, rows) => {
                    if (err) reject(err);
                    else resolve(rows);
                });
            });
        }
        catch(err) { return 'Error: ' + err.sqlMessage };
    }, 

    deleteByID: async (T_Name, ID_ToDelete) => {
        try {
            await new Promise((resolve, reject) => {
                let id_column = "";
                
                const singleIDs = ["Bill", "Doctor", "Nurse", "Patient", "Room", "Treatment", "Wardboy"];
                const relationIDs = ["Patient_Disease", "Patient_Doctor", "Patient_Treatment", "Room_Boywards", "Room_Nurses"];
                
                if (singleIDs.includes(T_Name)) id_column = T_Name+"ID";
                else if (relationIDs.includes(T_Name) ) id_column = T_Name.slice(0, T_Name.indexOf('_'))+"ID";
                
                let sql = `DELETE FROM ${T_Name} WHERE ${id_column} = ${ID_ToDelete};`;
                
                connection.query(sql, (err, rows) => {
                    if (err) reject(err);
                    else resolve(rows);
                });
                
            });
        }
        catch(error) { return 'Error: ' + error.sqlMessage };
    },

    deleteRelationByIDs: async (T_Name, ID_First, ID_Second) => {
        try {
            new Promise((resolve, reject) => {
                let sql = "";
                switch (T_Name) {
                    case 'Patient_Disease':
                        sql = `DELETE FROM ${T_Name} WHERE PatientID=${Number(ID_First)} AND disease='${ID_Second}';`;
                        break;
                    case 'Patient_Doctor':
                        sql = `DELETE FROM ${T_Name} WHERE PatientID=${Number(ID_First)} AND DoctorID=${Number(ID_Second)};`;
                        break;
                    case 'Patient_Treatment':
                        sql = `DELETE FROM ${T_Name} WHERE PatientID=${Number(ID_First)} AND TreatmentID=${Number(ID_Second)};`;
                        break;
                    case 'Room_Boywards':
                        sql = `DELETE FROM ${T_Name} WHERE RoomID=${Number(ID_First)} AND WardboyID=${Number(ID_Second)};`;
                        break;
                    case 'Room_Nurses':
                        sql = `DELETE FROM ${T_Name} WHERE RoomID=${Number(ID_First)} AND NurseID=${Number(ID_Second)};`;
                        break;
                }
                
                connection.query(sql, (err, rows) => {
                    if (err) reject(err);
                    else resolve(rows);
                });
                
            });
        }
        catch(error) { return 'Error: ' + error.sqlMessage };
    }
}

const fn = {
    isArraysEqualed: (arrOne, arrTwo) => {
        if(arrOne.length !== arrTwo.length) return false;
        for (let i = 0; i < arrOne.length; i++) {
            if (arrOne[i] !== arrTwo[i]) return false;
        }
        return true;
    },
    checkValidity: (table, keys) => {
        let arr = [];
        switch(table) {
            case "Bill":
                arr = ['PatientID'];
                if(fn.isArraysEqualed(arr, keys)) return true;
                break;
            case "Doctor":
                arr = ['FullName', 'Specialization', 'PhoneNumber'];
                if(fn.isArraysEqualed(arr, keys)) return true;
                break;
            case "Nurse":
                arr = ['firstName', 'lastName', 'PhoneNumber'];
                if(fn.isArraysEqualed(arr, keys)) return true;
                break;
            case "Patient":
                arr = ['firstName', 'lastName', 'Address', 'gender', 'PhoneNumber', 'Admitted', 'AdmissionDate', 'DischargeDate', 'RoomID'];
                if(fn.isArraysEqualed(arr, keys)) return true;
                break;
            case "Patient_Disease":
                arr = ['PatientID', 'disease']; 
                if(fn.isArraysEqualed(arr, keys)) return true;
                break;
            case "Patient_Doctor":
                arr = ['PatientID', 'DoctorID'];
                if(fn.isArraysEqualed(arr, keys)) return true;
                break;
            case "Patient_Treatment":
                arr = ['PatientID', 'TreatmentID'];
                if(fn.isArraysEqualed(arr, keys)) return true;
                break;
            case "Room":
                arr = ['Type', 'RoomCostPerDay'];
                if(fn.isArraysEqualed(arr, keys)) return true;
                break;
            case "Room_Boywards":
                arr = ['RoomID', 'WardboyID'];
                if(fn.isArraysEqualed(arr, keys)) return true;
                break;
            case "Room_Nurses":
                arr = ['RoomID', 'NurseID'];
                if(fn.isArraysEqualed(arr, keys)) return true;
                break;
            case "Treatment":
                arr = ['Description', 'TreatmentCost'];
                if(fn.isArraysEqualed(arr, keys)) return true;
                break;
            case "Wardboy":
                arr = ['firstName', 'lastName', 'PhoneNumber'];
                if(fn.isArraysEqualed(arr, keys)) return true;
                break;
        }
    }
}

module.exports = { crud, fn };