/* Start of CRUD functions to construct the interface interface based on the table */
async function handleCreate(form, table) {
    switch (table) {
        case "Bill":
            form.innerHTML=`
                <div>
                    <label for="PatientID">PatientID: </label>
                    <select name="PatientID" id="PatientID">
                    </select>
                </div>
                <button type="submit">Submit</button>
            `;

            getIDs("Patient");
        break;
        case "Doctor":
            form.innerHTML=`
                <div>
                    <label for="FullName">FullName: </label>
                    <input type="text" name="FullName" id="FullName" required>
                </div>
                <div>
                    <label for="Specialization">Specialization: </label>
                    <input type="text" name="Specialization" id="Specialization" required>
                </div>
                <div>
                    <label for="PhoneNumber">PhoneNumber: </label>
                    <input type="tel" name="PhoneNumber" id="PhoneNumber" required>
                </div>
                <button type="submit">Submit</button>
            `;
            break;
        case "Nurse":
            form.innerHTML=`
                <div>
                    <label for="firstName">firstName: </label>
                    <input type="text" name="firstName" id="firstName" required>
                </div>
                <div>
                    <label for="lastName">lastName: </label>
                    <input type="text" name="lastName" id="lastName" required>
                </div>
                <div>
                    <label for="PhoneNumber">PhoneNumber: </label>
                    <input type="tel" name="PhoneNumber" id="PhoneNumber" required>
                </div>
                <button type="submit">Submit</button>
            `;
            break;
        case "Patient":
            form.innerHTML=`
                <div>
                    <label for="firstName">firstName: </label>
                    <input type="text" name="firstName" id="firstName" required>
                </div>
                <div>
                    <label for="lastName">lastName: </label>
                    <input type="text" name="lastName" id="lastName" required>
                </div>
                <div>
                    <label for="Address">Address: </label>
                    <input type="text" name="Address" id="Address" required>
                </div>
                <div>
                    <fieldset id="gender">
                        <legend>Gender</legend>
                        <label for="M">Male: </label>
                        <input type="radio" name="gender" id="M" value="M" />
                        <label for="F">Female: </label>
                        <input type="radio" name="gender" id="F" value="F" />
                    </fieldset>
                </div>
                <div>
                    <label for="PhoneNumber">PhoneNumber: </label>
                    <input type="tel" name="PhoneNumber" id="PhoneNumber" required>
                </div>
                <div>
                    <fieldset id="Admitted">
                        <legend>Admitted</legend>
                        <label for="yes">Yes: </label>
                        <input type="radio" name="Admitted" id="yes" value="1" />
                        <label for="no">No: </label>
                        <input type="radio" name="Admitted" id="no" value="0" />
                    </fieldset>
                </div>
                <div id="AdmissionDateDiv"> 
                    <label for="AdmissionDate">AdmissionDate: </label>
                    <input type="date" name="AdmissionDate" id="AdmissionDate" value="${currentYear}-${currentMonth}-${currentDay}" required>
                </div>
                <div id="DischargeDateDiv"> 
                    <label for="DischargeDate">DischargeDate: </label>
                    <input type="date" name="DischargeDate" id="DischargeDate" value="${currentYear}-${currentMonth}-${currentDay}" required>
                </div>
                <div>
                    <label for="RoomID">RoomID: </label>
                    <select name="RoomID" id="RoomID"></select>
                </div>
                <button type="submit">Submit</button>
            `;

            getIDs("Room");

            let yesAdmitted = document.querySelector('#Admitted #yes');
            let noAdmitted = document.querySelector('#Admitted #no');
            yesAdmitted.addEventListener('change', () =>  isAdmitted(false));
            noAdmitted.addEventListener('change', () => isAdmitted(false));
            
            break;
        case "Patient_Disease":
            form.innerHTML=`
                <div>
                    <label for="PatientID">PatientID: </label>
                    <select name="PatientID" id="PatientID"></select>
                </div>
                <div>
                    <label for="disease">disease: </label>
                    <input type="text" id="disease" name="disease" />
                </div>
                <button type="submit">Submit</button>
            `;

            getIDs("Patient");
            break;
        case "Patient_Doctor":
            form.innerHTML=`
                <div>
                    <label for="PatientID">PatientID: </label>
                    <select name="PatientID" id="PatientID"></select>
                </div>
                <div>
                    <label for="DoctorID">DoctorID: </label>
                    <select name="DoctorID" id="DoctorID"></select>
                </div>
                <button type="submit">Submit</button>
            `;

            getIDs("Patient");
            getIDs("Doctor");
            break;
        case "Patient_Treatment":
            form.innerHTML=`
                <div>
                    <label for="PatientID">PatientID: </label>
                    <select name="PatientID" id="PatientID"></select>
                </div>
                <div>
                    <label for="TreatmentID">TreatmentID: </label>
                    <select name="TreatmentID" id="TreatmentID"></select>
                </div>
                <button type="submit">Submit</button>
            `;

            getIDs("Patient");
            getIDs("Treatment");
            break;
        case "Room":
            form.innerHTML=`
                <div>
                    <fieldset id="Type">
                        <legend>Type</legend>
                        <div>
                            <label for="ICU">ICU: </label>
                            <input type="radio" name="Type" id="ICU" value="ICU" />
                        </div>
                        <div>
                            <label for="Operation Theater 	">Operation Theater 	: </label>
                            <input type="radio" name="Type" id="Operation Theater" value="Operation Theater" />
                        </div>
                        <div>
                            <label for="General">General: </label>
                            <input type="radio" name="Type" id="General" value="General" />
                        </div>
                    </fieldset>
                </div>
                <div>
                    <label for="RoomCostPerDay">RoomCostPerDay: </label>
                    <input type="number" name="RoomCostPerDay" id="RoomCostPerDay" required>
                </div>
                <button type="submit">Submit</button>
            `;
            break;
        case "Room_Boywards":
            form.innerHTML=`
                <div>
                    <label for="RoomID">RoomID: </label>
                    <select name="RoomID" id="RoomID"></select>
                </div>
                <div>
                    <label for="WardboyID">WardboyID: </label>
                    <select name="WardboyID" id="WardboyID"></select>
                </div>
                <button type="submit">Submit</button>
            `;

            getIDs("Room");
            getIDs("Wardboy");
            break;
        case "Room_Nurses":
            form.innerHTML=`
                <div>
                    <label for="RoomID">RoomID: </label>
                    <select name="RoomID" id="RoomID"></select>
                </div>
                <div>
                    <label for="NurseID">NurseID: </label>
                    <select name="NurseID" id="NurseID"></select>
                </div>
                <button type="submit">Submit</button>
            `;

            getIDs("Room");
            getIDs("Nurse");
            break;
        case "Treatment":
            form.innerHTML=`
                <div>
                    <label for="Description">Description: </label>
                    <input type="text" name="Description" id="Description" required>
                </div>
                <div>
                    <label for="TreatmentCost">TreatmentCost: </label>
                    <input type="number" name="TreatmentCost" id="TreatmentCost" required>
                </div>
                <button type="submit">Submit</button>
            `;
            break;
        case "Wardboy":
            form.innerHTML=`
                <div>
                    <label for="firstName">firstName: </label>
                    <input type="text" name="firstName" id="firstName" required>
                </div>
                <div>
                    <label for="lastName">lastName: </label>
                    <input type="text" name="lastName" id="lastName" required>
                </div>
                <div>
                    <label for="PhoneNumber">PhoneNumber: </label>
                    <input type="text" name="PhoneNumber" id="PhoneNumber" required>
                </div>
                <button type="submit">Submit</button>
            `;
            break;
    }
}
async function handleRead(form, table) {
    form.remove();

    // Getting the data
    var data = await fetch (`http://localhost:3201/${table}`, { method: 'GET' })
        .then((response) => {return response.json()})
        .then((values) => data = values);
    
    switch (table) {
        case "Bill":
            for (let i = 0; i < data.length; i++) {
                let div = document.createElement('div');
                div.setAttribute("id", "BillID_" + data[i]['BillID'])
                div.innerHTML = `
                
                <p class="BillID">BillID: ${data[i]["BillID"]}</p>
                <p class="PatientID">PatientID: ${data[i]["PatientID"]}</p>
                <p class="RoomID">RoomID: ${data[i]["RoomID"]}</p>
                <p class="RoomCostPerDay">RoomCostPerDay: ${data[i]["RoomCostPerDay"]}</p>
                <p class="TotalDays">TotalDays: ${data[i]["TotalDays"]}</p>
                <p class="TotalTreatmentCost" >TotalTreatmentCost: ${data[i]["TotalTreatmentCost"]}</p>
                <p class="TotalCost">TotalCost: ${data[i]["TotalCost"]}</p>
                `
                document.querySelector('main').appendChild(div);
            }
        break;
        case "Doctor":
            for (let i = 0; i < data.length; i++) {
                let div = document.createElement('div');
                div.setAttribute("id", "DoctorID_" + data[i]['DoctorID'])
                div.innerHTML = `
                    <p class="DoctorID">DoctorID: ${data[i]["DoctorID"]}</p>
                    <p class="FullName">FullName: ${data[i]["FullName"]}</p>
                    <p class="Specialization">Specialization: ${data[i]["Specialization"]}</p>
                    <p class="PhoneNumber">PhoneNumber: ${data[i]["PhoneNumber"]}</p>
                `
                document.querySelector('main').appendChild(div);
            }
            break;
        case "Nurse":
            for (let i = 0; i < data.length; i++) {
                let div = document.createElement("div");
                div.setAttribute("id", "NurseID_" + data[i]["NurseID"])
                div.innerHTML = `
                    <p class="NurseID">NurseID: ${data[i]["NurseID"]}</p>
                    <p class="firstName">firstName: ${data[i]["firstName"]}</p>
                    <p class="lastName">lastName: ${data[i]["lastName"]}</p>
                    <p class="PhoneNumber">PhoneNumber: ${data[i]["PhoneNumber"]}</p>
                `
                document.querySelector('main').appendChild(div);
            }
            break;
        case "Patient":
            for (let i = 0; i < data.length; i++) {
                let div = document.createElement('div');
                div.setAttribute("id", "PatientID_" + data[i]["PatientID"])
                div.innerHTML = `
                    <p class="PatientID">PatientID: ${data[i]["PatientID"]}</p>
                    <p class="firstName">firstName: ${data[i]["firstName"]}</p>
                    <p class="lastName">lastName: ${data[i]["lastName"]}</p>
                    <p class="Address">Address: ${data[i]["Address"]}</p>
                    <p class="gender">gender: ${data[i]["gender"]}</p>
                    <p class="PhoneNumber">PhoneNumber: ${data[i]["PhoneNumber"]}</p>
                    <p class="Admitted">Admitted: ${data[i]["Admitted"]}</p>
                    <p class="AdmissionDate">AdmissionDate: ${data[i]["AdmissionDate"].slice(0,data[i]["AdmissionDate"].indexOf('T'))}</p>
                    <p class="DischargeDate">DischargeDate: ${data[i]["DischargeDate"].slice(0,data[i]["DischargeDate"].indexOf('T'))}</p>
                    <p class="RoomID">RoomID: ${data[i]["RoomID"]}</p>
                `
                document.querySelector('main').appendChild(div);
            }
            break;
        case "Patient_Disease":
            for (let i = 0; i < data.length; i++) {
                let div = document.createElement('div');
                div.setAttribute("id", "PatientID_" + data[i]["PatientID"])
                div.innerHTML = `
                    <p class="PatientID">PatientID: ${data[i]["PatientID"]}</p>
                    <p class="disease">disease: ${data[i]["disease"]}</p>
                `
                document.querySelector('main').appendChild(div);
            }
            break;
        case "Patient_Doctor":
            for (let i = 0; i < data.length; i++) {
                let div = document.createElement('div');
                div.setAttribute("id", "PatientID_" + data[i]["PatientID"])
                div.innerHTML = `
                    <p class="PatientID">PatientID: ${data[i]["PatientID"]}</p>
                    <p class="DoctorID">DoctorID: ${data[i]["DoctorID"]}</p>
                `
                document.querySelector('main').appendChild(div);
            }
            break;
        case "Patient_Treatment":
            for (let i = 0; i < data.length; i++) {
                let div = document.createElement('div');
                div.setAttribute("id", "PatientID_" + data[i]["PatientID"])
                div.innerHTML = `
                    <p class="PatientID">PatientID: ${data[i]["PatientID"]}</p>
                    <p class="TreatmentID">TreatmentID: ${data[i]["TreatmentID"]}</p>
                `
                document.querySelector('main').appendChild(div);
            }
            break;
        case "Room":
            for (let i = 0; i < data.length; i++) {
                let div = document.createElement('div');
                div.setAttribute("id", "RoomID_" + data[i]["RoomID"])
                div.innerHTML = `
                    <p class="RoomID">RoomID: ${data[i]["RoomID"]}</p>
                    <p class="Type">Type: ${data[i]["Type"]}</p>
                    <p class="RoomCostPerDay">RoomCostPerDay: ${data[i]["RoomCostPerDay"]}</p>
                `
                document.querySelector('main').appendChild(div);
            }
            break;
        case "Room_Boywards":
            for (let i = 0; i < data.length; i++) {
                let div = document.createElement('div');
                div.setAttribute("id", "RoomID_" + data[i]["RoomID"])
                div.innerHTML = `
                    <p class="RoomID">RoomID: ${data[i]["RoomID"]}</p>
                    <p class="WardboyID">WardboyID: ${data[i]["WardboyID"]}</p>
                `
                document.querySelector('main').appendChild(div);
            }
            break;
        case "Room_Nurses":
            for (let i = 0; i < data.length; i++) {
                let div = document.createElement('div');
                div.setAttribute("id", "RoomID_" + data[i]["RoomID"])
                div.innerHTML = `
                    <p class="RoomID">RoomID: ${data[i]["RoomID"]}</p>
                    <p class="NurseID">NurseID: ${data[i]["NurseID"]}</p>
                `
                document.querySelector('main').appendChild(div);
            }
            break;
        case "Treatment":
            for (let i = 0; i < data.length; i++) {
                let div = document.createElement('div');
                div.setAttribute("id", "TreatmentID_" + data[i]["TreatmentID"])
                div.innerHTML = `
                    <p class="TreatmentID">TreatmentID: ${data[i]["TreatmentID"]}</p>
                    <p class="Description">Description: ${data[i]["Description"]}</p>
                    <p class="TreatmentCost">TreatmentCost: ${data[i]["TreatmentCost"]}</p>
                `
                document.querySelector('main').appendChild(div);
            }
            break;
        case "Wardboy":
            for (let i = 0; i < data.length; i++) {
                let div = document.createElement('div');
                div.setAttribute("id", "WardboyID_" + data[i]["WardboyID"])
                div.innerHTML = `
                    <p class="WardboyID">WardboyID: ${data[i]["WardboyID"]}</p>
                    <p class="firstName">firstName: ${data[i]["firstName"]}</p>
                    <p class="lastName">lastName: ${data[i]["lastName"]}</p>
                    <p class="PhoneNumber">PhoneNumber: ${data[i]["lastName"]}</p>
                `
                document.querySelector('main').appendChild(div);
            }
            break;
    }
}
async function handleUpdate(form, table) {
    form.remove();
    var data = await fetch (`http://localhost:3201/${table}`, { method: 'GET' })
        .then((response) => {return response.json()})
        .then((values) => data = values);
    
    switch (table) {
        case "Doctor":
            for (let i = 0; i < data.length; i++) {
                let formContainer = document.createElement('form');
                formContainer.setAttribute("id", "DoctorID_" + data[i]['DoctorID'])
                formContainer.setAttribute("method", "PUT")
                formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["DoctorID"]}`)
                formContainer.innerHTML = `
                <div>
                    <label for="DoctorID${i}">DoctorID: </label>
                    <input type="text" name="DoctorID" id="DoctorID${i}" value="${data[i]['DoctorID']}" required disabled>
                </div>
                <div>
                    <label for="FullName${i}">FullName: </label>
                    <input type="text" name="FullName" id="FullName${i}" value="${data[i]['FullName']}" required>
                </div>
                <div>
                    <label for="Specialization${i}">Specialization: </label>
                    <input type="text" name="Specialization" id="Specialization${i}" value="${data[i]['Specialization']}" required>
                </div>
                <div>
                    <label for="PhoneNumber${i}">PhoneNumber: </label>
                    <input type="tel" name="PhoneNumber" id="PhoneNumber${i}" value="${data[i]['PhoneNumber']}" required>
                </div>
                <button type="submit">Submit</button>
                `
                formContainer.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitForm(formContainer);
                })
                document.querySelector('main').appendChild(formContainer);
            }
            break;
        case "Nurse":
            for (let i = 0; i < data.length; i++) {
                let formContainer = document.createElement('form');
                formContainer.setAttribute("id", "NurseID_" + data[i]['NurseID'])
                formContainer.setAttribute("method", "PUT")
                formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["NurseID"]}`)
                formContainer.innerHTML = `
                <div>
                    <label for="NurseID${i}">NurseID: </label>
                    <input type="text" name="NurseID" id="NurseID${i}" value="${data[i]['NurseID']}" required disabled>
                </div>
                <div>
                    <label for="firstName${i}">firstName: </label>
                    <input type="text" name="firstName" id="firstName${i}" value="${data[i]['firstName']}" required>
                </div>
                <div>
                    <label for="lastName${i}">lastName: </label>
                    <input type="text" name="lastName" id="lastName${i}" value="${data[i]['lastName']}" required>
                </div>
                <div>
                    <label for="PhoneNumber${i}">PhoneNumber: </label>
                    <input type="tel" name="PhoneNumber" id="PhoneNumber${i}" value="${data[i]['PhoneNumber']}" required>
                </div>
                <button type="submit">Submit</button>
                `
                formContainer.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitForm(formContainer);
                })
                document.querySelector('main').appendChild(formContainer);
            }
            break;
        case "Patient":
            for (let i = 0; i < data.length; i++) {
                let formContainer = document.createElement('form');
                formContainer.setAttribute("id", "PatientID_" + data[i]['PatientID'])
                formContainer.setAttribute("method", "PUT")
                formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["PatientID"]}`)
                formContainer.innerHTML = `
                <div>
                    <label for="PatientID${i}">PatientID: </label>
                    <input type="text" name="PatientID${i}" id="PatientID" value="${data[i]['PatientID']}" required disabled>
                </div>
                <div>
                    <label for="firstName${i}">firstName: </label>
                    <input type="text" name="firstName" id="firstName${i}" value="${data[i]['firstName']}" required>
                </div>
                <div>
                    <label for="lastName${i}">lastName: </label>
                    <input type="text" name="lastName" id="lastName${i}" value="${data[i]['lastName']}" required>
                </div>
                <div>
                    <label for="Address${i}">Address: </label>
                    <input type="text" name="Address" id="Address${i}" value="${data[i]['Address']}" required>
                </div>
                <div>
                    <fieldset id="gender">
                        <legend>Gender</legend>
                        <label for="M${i}">Male: </label>
                        <input type="radio" name="gender" id="M${i}" value="M" ${data[i]['gender'] === 'M' ? "checked" : ""} />
                        <label for="F${i}">Female: </label>
                        <input type="radio" name="gender" id="F${i}" value="F" ${data[i]['gender'] === 'F' ? "checked" : ""} />
                    </fieldset>
                </div>
                <div>
                    <label for="PhoneNumber">PhoneNumber: </label>
                    <input type="tel" name="PhoneNumber" id="PhoneNumber" value="${data[i]["PhoneNumber"]}" required>
                </div>
                <div>
                    <fieldset id="Admitted${i}">
                        <legend>Admitted</legend>
                        <label for="yes${i}">Yes: </label>
                        <input type="radio" name="Admitted" id="yes${i}" value="1" ${data[i]['Admitted'] === 1 ? "checked" : ""} />
                        <label for="no${i}">No: </label>
                        <input type="radio" name="Admitted" id="no${i}" value="0" ${data[i]['Admitted'] === 0 ? "checked" : ""} />
                    </fieldset>
                </div>
                <div id="AdmissionDateDiv${i}"> 
                    <label for="AdmissionDate${i}">AdmissionDate: </label>
                    <input type="date" name="AdmissionDate" id="AdmissionDate${i}" placeholder="${data[i]['AdmissionDate']}" value="${data[i]['AdmissionDate'].split('-')[0]}-${data[i]['AdmissionDate'].split('-')[1]}-${data[i]['AdmissionDate'].split('-')[2].slice(0,data[i]['AdmissionDate'].split('-')[2].indexOf('T'))}" required>
                </div>
                <div id="DischargeDateDiv${i}"> 
                    <label for="DischargeDate${i}">DischargeDate: </label>
                    <input type="date" name="DischargeDate" id="DischargeDate${i}" placeholder="${data[i]['DischargeDate']}" value="${data[i]['AdmissionDate'].split('-')[0]}-${data[i]['DischargeDate'].split('-')[1]}-${data[i]['DischargeDate'].split('-')[2].slice(0,data[i]['DischargeDate'].split('-')[2].indexOf('T'))}" required>
                </div>
                <div>
                    <label for="RoomID${i}">RoomID: </label>
                    <select name="RoomID" id="RoomID${i}"></select>
                </div>
                <button type="submit">Submit</button>
                `
                document.querySelector('main').appendChild(formContainer);
                let yesAdmitted = document.querySelector(`fieldset #yes${i}`);
                let noAdmitted = document.querySelector(`fieldset #no${i}`);
                if(yesAdmitted) yesAdmitted.addEventListener('change', (event) => isAdmitted(event));
                if(noAdmitted) noAdmitted.addEventListener('change', (event) => isAdmitted(event));

                await getIDs("Room", document.querySelector(`#RoomID${i}`).getAttribute("id").slice(-1))
                document.querySelector(`select#RoomID${i} option[value="${data[i]['RoomID']}"]`).setAttribute('selected', '')
                
                formContainer.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitForm(formContainer);
                })
            }
            
            break;
        case "Patient_Disease":
            for (let i = 0; i < data.length; i++) {
                let formContainer = document.createElement('form');
                formContainer.setAttribute("id", "PatientID_" + data[i]['PatientID'] + "diesase_" + data[i]['disease'])
                formContainer.setAttribute("method", "PUT")
                formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["PatientID"]}/${data[i]["disease"]}`)
                formContainer.innerHTML = `
                <h2>Old: </h2>
                <div>
                    <label for="PatientIDOld${i}">PatientID: </label>
                    <input type="text" name="PatientID" id="PatientIDold${i}" value="${data[i]['PatientID']}" required disabled>
                </div>
                <div>
                    <label for="diseaseOld${i}">disease: </label>
                    <input type="text" name="disease" id="diseaseOld${i}" value="${data[i]['disease']}" required disabled>
                </div>
                <hr />
                <h2>New</h2>
                <div>
                <label for="PatientID${i}">PatientID: </label>
                <select name="PatientID" id="PatientID${i}" required></select>
                </div>
                <div>
                    <label for="disease${i}">disease: </label>
                    <input type="text" name="disease" id="disease${i}" value="${data[i]['disease']}" required>
                </div>
                <button type="submit">Submit</button>
                `
                formContainer.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitForm(formContainer);
                })
                document.querySelector('main').appendChild(formContainer);
                await getIDs("Patient", document.querySelector(`#PatientID${i}`).getAttribute("id").slice(-1))
                document.querySelector(`select#PatientID${i} option[value="${data[i]['PatientID']}"]`).setAttribute('selected', '')
            }
            break;
        case "Patient_Doctor":
            for (let i = 0; i < data.length; i++) {
                let formContainer = document.createElement('form');
                formContainer.setAttribute("id", "PatientID_" + data[i]['PatientID'] + "DoctorID_" + data[i]['DoctorID'])
                formContainer.setAttribute("method", "PUT")
                formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["PatientID"]}/${data[i]["DoctorID"]}`)
                formContainer.innerHTML = `
                <h2>Old: </h2>
                <div>
                    <label for="PatientIDOld${i}">PatientID: </label>
                    <input type="text" name="PatientID" id="PatientIDOld${i}" value="${data[i]['PatientID']}" required disabled>
                </div>
                <div>
                    <label for="DoctorIDOld${i}">DoctorID: </label>
                    <input type="text" name="DoctorID" id="DoctorIDOld${i}" value="${data[i]['DoctorID']}" required disabled>
                </div>
                <hr />
                <h2>New</h2>
                <div>
                    <label for="PatientID${i}">PatientID: </label>
                    <select name="PatientID" id="PatientID${i}" required></select>
                </div>
                <div>
                    <label for="DoctorID${i}">DoctorID: </label>
                    <select name="DoctorID" id="DoctorID${i}" required></select>
                </div>
                <button type="submit">Submit</button>
                `
                formContainer.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitForm(formContainer);
                })
                document.querySelector('main').appendChild(formContainer);
                await getIDs("Patient", document.querySelector(`#PatientID${i}`).getAttribute("id").slice(-1))
                await getIDs("Doctor", document.querySelector(`#DoctorID${i}`).getAttribute("id").slice(-1))
                document.querySelector(`select#PatientID${i} option[value="${data[i]['PatientID']}"]`).setAttribute('selected', '')
                document.querySelector(`select#DoctorID${i} option[value="${data[i]['DoctorID']}"]`).setAttribute('selected', '')
            }
            break;
        case "Patient_Treatment":
            for (let i = 0; i < data.length; i++) {
                let formContainer = document.createElement('form');
                formContainer.setAttribute("id", "PatientID_" + data[i]['PatientID'] + "TreatmentID_" + data[i]['TreatmentID'])
                formContainer.setAttribute("method", "PUT")
                formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["PatientID"]}/${data[i]["TreatmentID"]}`)
                formContainer.innerHTML = `
                <h2>Old: </h2>
                <div>
                    <label for="PatientIDold${i}">PatientID: </label>
                    <input type="text" name="PatientID" id="PatientIDold${i}" value="${data[i]['PatientID']}" required disabled>
                </div>
                <div>
                    <label for="TreatmentIDold${i}">TreatmentID: </label>
                    <input type="text" name="TreatmentID" id="TreatmentIDold${i}" value="${data[i]['TreatmentID']}" required disabled>
                </div>
                <hr />
                <h2>New</h2>
                <div>
                    <label for="PatientID${i}">PatientID: </label>
                    <select name="PatientID" id="PatientID${i}"></select>                
                </div>
                <div>
                    <label for="TreatmentID${i}">TreatmentID: </label>
                    <select name="TreatmentID" id="TreatmentID${i}"></select>                
                </div>
                <button type="submit">Submit</button>
                `
                formContainer.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitForm(formContainer);
                })
                document.querySelector('main').appendChild(formContainer);
                await getIDs("Patient", document.querySelector(`#PatientID${i}`).getAttribute("id").slice(-1))
                await getIDs("Treatment", document.querySelector(`#TreatmentID${i}`).getAttribute("id").slice(-1))
                document.querySelector(`select#PatientID${i} option[value="${data[i]['PatientID']}"]`).setAttribute('selected', '')
                document.querySelector(`select#TreatmentID${i} option[value="${data[i]['TreatmentID']}"]`).setAttribute('selected', '')
            }
            break;
        case "Room":
            for (let i = 0; i < data.length; i++) {
                let formContainer = document.createElement('form');
                formContainer.setAttribute("id", "RoomID_" + data[i]['RoomID'])
                formContainer.setAttribute("method", "PUT")
                formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["RoomID"]}`)
                formContainer.innerHTML = `
                <div>
                    <label for="RoomID${i}">RoomID: </label>
                    <input type="text" name="RoomID" id="RoomID${i}" value="${data[i]['RoomID']}" required disabled>
                </div>
                <div>
                    <fieldset id="Type${i}">
                        <legend>Type</legend>
                        <label for="ICU${i}">ICU: </label>
                        <input type="radio" name="Type" id="ICU${i}" value="ICU" ${data[i]['Type'] === 'ICU' ? "checked" : ""} />
                        <label for="Operation Theater${i}">Operation Theater: </label>
                        <input type="radio" name="Type" id="Operation Theater${i}" value="Operation Theater" ${data[i]['Type'] === 'Operation Theater' ? "checked" : ""} />
                        <label for="General">General: </label>
                        <input type="radio" name="Type" id="General${i}" value="General" ${data[i]['Type'] === 'General' ? "checked" : ""} />
                    </fieldset>
                </div>
                <div>
                    <label for="RoomCostPerDay${i}">RoomCostPerDay: </label>
                    <input type="number" name="RoomCostPerDay" id="RoomCostPerDay${i}" value="${data[i]["RoomCostPerDay"]}" required>
                </div>
                <button type="submit">Submit</button>
                `
                formContainer.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitForm(formContainer);
                })
                document.querySelector('main').appendChild(formContainer);
            }
            break;
        case "Room_Boywards":
                for (let i = 0; i < data.length; i++) {
                    let formContainer = document.createElement('form');
                    formContainer.setAttribute("id", "RoomID_" + data[i]['RoomID'] + "WardboyID_" + data[i]['WardboyID'])
                    formContainer.setAttribute("method", "PUT")
                    formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["RoomID"]}/${data[i]["WardboyID"]}`)
                    formContainer.innerHTML = `
                    <h2>Old: </h2>
                    <div>
                        <label for="RoomIDold${i}">RoomID: </label>
                        <input type="text" name="RoomID" id="RoomIDold${i}" value="${data[i]['RoomID']}" required disabled>
                    </div>
                    <div>
                        <label for="WardboyIDold${i}">WardboyID: </label>
                        <input type="text" name="WardboyID" id="WardboyIDold${i}" value="${data[i]['WardboyID']}" required disabled>
                    </div>
                    <hr />
                    <h2>New</h2>
                    <div>
                        <label for="RoomID${i}">RoomID: </label>
                        <select name="RoomID" id="RoomID${i}"></select>
                    </div>
                    <div>
                        <label for="WardboyID${i}">WardboyID: </label>
                        <select name="WardboyID" id="WardboyID${i}"></select>
                    </div>
                    <button type="submit">Submit</button>
                    `
                    formContainer.addEventListener('submit', (e) => {
                        e.preventDefault();
                        submitForm(formContainer);
                    })
                    document.querySelector('main').appendChild(formContainer);
                    await getIDs("Room", document.querySelector(`#RoomID${i}`).getAttribute("id").slice(-1))
                    await getIDs("Wardboy", document.querySelector(`#WardboyID${i}`).getAttribute("id").slice(-1))

                    document.querySelector(`select#RoomID${i} option[value="${data[i]['RoomID']}"]`).setAttribute('selected', '')
                    document.querySelector(`select#WardboyID${i} option[value="${data[i]['WardboyID']}"]`).setAttribute('selected', '')
                }
                break;
        case "Room_Nurses":
                for (let i = 0; i < data.length; i++) {
                    let formContainer = document.createElement('form');
                    formContainer.setAttribute("id", "RoomID_" + data[i]['RoomID'] + "NurseID_" + data[i]['NurseID'])
                    formContainer.setAttribute("method", "PUT")
                    formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["RoomID"]}/${data[i]["NurseID"]}`)
                    formContainer.innerHTML = `
                    <h2>Old: </h2>
                    <div>
                        <label for="RoomIDold${i}">RoomID: </label>
                        <input type="text" name="RoomID" id="RoomIDold${i}" value="${data[i]['RoomID']}" required disabled>
                    </div>
                    <div>
                        <label for="NurseIDold${i}">NurseID: </label>
                        <input type="text" name="NurseID" id="NurseIDold${i}" value="${data[i]['NurseID']}" required disabled>
                    </div>
                    <hr />
                    <h2>New</h2>
                    <div>
                        <label for="RoomID${i}">RoomID: </label>
                        <select name="RoomID" id="RoomID${i}"></select>
                    </div>
                    <div>
                        <label for="NurseID${i}">NurseID: </label>
                        <select name="NurseID" id="NurseID${i}"></select>
                    </div>
                    <button type="submit">Submit</button>
                    `
                    formContainer.addEventListener('submit', (e) => {
                        e.preventDefault();
                        submitForm(formContainer);
                    })
                    document.querySelector('main').appendChild(formContainer);

                    await getIDs("Room", document.querySelector(`#RoomID${i}`).getAttribute("id").slice(-1))
                    await getIDs("Nurse", document.querySelector(`#NurseID${i}`).getAttribute("id").slice(-1))

                    document.querySelector(`select#RoomID${i} option[value="${data[i]['RoomID']}"]`).setAttribute('selected', '')
                    document.querySelector(`select#NurseID${i} option[value="${data[i]['NurseID']}"]`).setAttribute('selected', '')
                }
                break;
        case "Treatment":
            for (let i = 0; i < data.length; i++) {
                let formContainer = document.createElement('form');
                formContainer.setAttribute("id", "TreatmentID_" + data[i]['TreatmentID'])
                formContainer.setAttribute("method", "PUT")
                formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["TreatmentID"]}`)
                formContainer.innerHTML = `
                    <div>
                        <label for="TreatmentID">TreatmentID: </label>
                        <input type="text" name="TreatmentID" id="TreatmentID${i}" value="${data[i]["TreatmentID"]}" required disabled>
                    </div>
                    <div>
                        <label for="Description${i}">Description: </label>
                        <input type="text" name="Description" id="Description${i}" value="${data[i]["Description"]}" required>
                    </div>
                    <div>
                        <label for="TreatmentCost${i}">TreatmentCost: </label>
                        <input type="number" name="TreatmentCost" id="TreatmentCost${i}" value="${data[i]["TreatmentCost"]}" required>
                    </div>
                    <button type="submit">Submit</button>
                `
                formContainer.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitForm(formContainer);
                })
                document.querySelector('main').appendChild(formContainer);
            }
            break;
        case "Wardboy":
            for (let i = 0; i < data.length; i++) {
                let formContainer = document.createElement('form');
                formContainer.setAttribute("id", "WardboyID_" + data[i]['WardboyID'])
                formContainer.setAttribute("method", "PUT")
                formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["WardboyID"]}`)
                formContainer.innerHTML = `
                    <div>
                        <label for="WardboyID${i}">WardboyID: </label>
                        <input type="text" name="WardboyID" id="WardboyID${i}" value="${data[i]["WardboyID"]}" required disabled>
                    </div>
                    <div>
                        <label for="firstName${i}">firstName: </label>
                        <input type="text" name="firstName" id="firstName${i}" value="${data[i]["firstName"]}" required>
                    </div>
                    <div>
                        <label for="lastName${i}">lastName: </label>
                        <input type="text" name="lastName" id="lastName${i}" value="${data[i]["lastName"]}" required>
                    </div>
                    <div>
                        <label for="PhoneNumber${i}">PhoneNumber: </label>
                        <input type="text" name="PhoneNumber" id="PhoneNumber${i}" value="${data[i]["PhoneNumber"]}" required>
                    </div>
                    <button type="submit">Submit</button>
                `
                formContainer.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitForm(formContainer);
                })
                document.querySelector('main').appendChild(formContainer);
            }
            break;
    }
}
async function handleDelete(form, table) {
    form.remove();
    var data = await fetch (`http://localhost:3201/${table}`, { method: 'GET' })
        .then((response) => {return response.json()})
        .then((values) => data = values);
    
    switch (table) {
        case "Bill":
            for (let i = 0; i < data.length; i++) {
                let formContainer = document.createElement('form');
                formContainer.setAttribute("id", "BillID_" + data[i]['BillID'])
                formContainer.setAttribute("method", "DELETE")
                formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["BillID"]}`)
                formContainer.innerHTML = `
                <div>
                    <label for="BillID${i}">BillID: </label>
                    <input type="text" name="BillID" id="BillID${i}" value="${data[i]['BillID']}" required disabled>
                </div>
                <div>
                    <label for="PatientID${i}">PatientID: </label>
                    <input type="number" name="PatientID" id="PatientID${i}" value="${data[i]['PatientID']}" required disabled>
                </div>
                <div>
                    <label for="RoomID${i}">RoomID: </label>
                    <input type="number" name="RoomID" id="RoomID${i}" value="${data[i]['RoomID']}" required disabled>
                </div>
                <div>
                    <label for="RoomCostPerDay${i}">RoomCostPerDay: </label>
                    <input type="tel" name="RoomCostPerDay" id="RoomCostPerDay${i}" value="${data[i]['RoomCostPerDay']}" required disabled>
                </div>
                <div>
                    <label for="TotalDays${i}">TotalDays: </label>
                    <input type="number" name="TotalDays" id="TotalDays${i}" value="${data[i]['TotalDays']}" required disabled>
                </div>
                <div>
                    <label for="TotalTreatmentCost${i}">TotalTreatmentCost: </label>
                    <input type="number" name="TotalTreatmentCost" id="TotalTreatmentCost${i}" value="${data[i]['TotalTreatmentCost']}" required disabled>
                </div>
                <div>
                    <label for="TotalCost${i}">TotalCost: </label>
                    <input type="number" name="TotalCost" id="TotalCost${i}" value="${data[i]['TotalCost']}" required disabled>
                </div>
                <button type="submit" class="deletebtn">DELETE</button>
                `
                formContainer.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitForm(formContainer);
                })
                document.querySelector('main').appendChild(formContainer);
            }
            break;
        case "Doctor":
            for (let i = 0; i < data.length; i++) {
                let formContainer = document.createElement('form');
                formContainer.setAttribute("id", "DoctorID_" + data[i]['DoctorID'])
                formContainer.setAttribute("method", "DELETE")
                formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["DoctorID"]}`)
                formContainer.innerHTML = `
                <div>
                    <label for="DoctorID${i}">DoctorID: </label>
                    <input type="text" name="DoctorID" id="DoctorID${i}" value="${data[i]['DoctorID']}" required disabled>
                </div>
                <div>
                    <label for="FullName${i}">FullName: </label>
                    <input type="text" name="FullName" id="FullName${i}" value="${data[i]['FullName']}" required disabled>
                </div>
                <div>
                    <label for="Specialization${i}">Specialization: </label>
                    <input type="text" name="Specialization" id="Specialization${i}" value="${data[i]['Specialization']}" required disabled>
                </div>
                <div>
                    <label for="PhoneNumber${i}">PhoneNumber: </label>
                    <input type="tel" name="PhoneNumber" id="PhoneNumber${i}" value="${data[i]['PhoneNumber']}" required disabled>
                </div>
                <button type="submit" class="deletebtn">DELETE</button>
                `
                formContainer.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitForm(formContainer);
                })
                document.querySelector('main').appendChild(formContainer);
            }
            break;
        case "Nurse":
            for (let i = 0; i < data.length; i++) {
                let formContainer = document.createElement('form');
                formContainer.setAttribute("id", "NurseID_" + data[i]['NurseID'])
                formContainer.setAttribute("method", "DELETE")
                formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["NurseID"]}`)
                formContainer.innerHTML = `
                <div>
                    <label for="NurseID${i}">NurseID: </label>
                    <input type="text" name="NurseID" id="NurseID${i}" value="${data[i]['NurseID']}" required disabled>
                </div>
                <div>
                    <label for="firstName${i}">firstName: </label>
                    <input type="text" name="firstName" id="firstName${i}" value="${data[i]['firstName']}" required disabled>
                </div>
                <div>
                    <label for="lastName${i}">lastName: </label>
                    <input type="text" name="lastName" id="lastName${i}" value="${data[i]['lastName']}" required disabled>
                </div>
                <div>
                    <label for="PhoneNumber${i}">PhoneNumber: </label>
                    <input type="tel" name="PhoneNumber" id="PhoneNumber${i}" value="${data[i]['PhoneNumber']}" required disabled>
                </div>
                <button type="submit" class="deletebtn">DELETE</button>
                `
                formContainer.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitForm(formContainer);
                })
                document.querySelector('main').appendChild(formContainer);
            }
            break;
        case "Patient":
            for (let i = 0; i < data.length; i++) {
                let formContainer = document.createElement('form');
                formContainer.setAttribute("id", "PatientID_" + data[i]['PatientID'])
                formContainer.setAttribute("method", "DELETE")
                formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["PatientID"]}`)
                formContainer.innerHTML = `
                <div>
                    <label for="PatientID${i}">PatientID: </label>
                    <input type="text" name="PatientID${i}" id="PatientID" value="${data[i]['PatientID']}" required disabled>
                </div>
                <div>
                    <label for="firstName${i}">firstName: </label>
                    <input type="text" name="firstName" id="firstName${i}" value="${data[i]['firstName']}" required disabled>
                </div>
                <div>
                    <label for="lastName${i}">lastName: </label>
                    <input type="text" name="lastName" id="lastName${i}" value="${data[i]['lastName']}" required disabled>
                </div>
                <div>
                    <label for="Address${i}">Address: </label>
                    <input type="text" name="Address" id="Address${i}" value="${data[i]['Address']}" required disabled>
                </div>
                <div>
                    <fieldset id="gender">
                        <legend>Gender</legend>
                        <label for="M${i}">Male: </label>
                        <input type="radio" name="gender" id="M${i}" value="M" ${data[i]['gender'] === 'M' ? "checked" : ""} disabled />
                        <label for="F${i}">Female: </label>
                        <input type="radio" name="gender" id="F${i}" value="F" ${data[i]['gender'] === 'F' ? "checked" : ""} disabled />
                    </fieldset>
                </div>
                <div>
                    <label for="PhoneNumber">PhoneNumber: </label>
                    <input type="tel" name="PhoneNumber" id="PhoneNumber" value="${data[i]["PhoneNumber"]}" required disabled>
                </div>
                <div>
                    <fieldset id="Admitted${i}">
                        <legend>Admitted</legend>
                        <label for="yes${i}">Yes: </label>
                        <input type="radio" name="Admitted" id="yes${i}" value="1" ${data[i]['Admitted'] === 1 ? "checked" : ""} disabled />
                        <label for="no${i}">No: </label>
                        <input type="radio" name="Admitted" id="no${i}" value="0" ${data[i]['Admitted'] === 0 ? "checked" : ""} disabled />
                    </fieldset>
                </div>
                <div id="AdmissionDateDiv${i}"> 
                    <label for="AdmissionDate${i}">AdmissionDate: </label>
                    <input type="date" name="AdmissionDate" id="AdmissionDate${i}" placeholder="${data[i]['AdmissionDate']}" value="${data[i]['AdmissionDate']}" required disabled>
                </div>
                <div id="DischargeDateDiv${i}"> 
                    <label for="DischargeDate${i}">DischargeDate: </label>
                    <input type="date" name="DischargeDate" id="DischargeDate${i}" value="${currentYear}-${currentMonth}-${currentDay}" required disabled>
                </div>
                <div>
                    <label for="RoomID${i}">RoomID: </label>
                    <input type="number" name="RoomID" id="RoomID${i}" value="${data[i]['RoomID']}" required disabled>
                </div>
                <button type="submit" class="deletebtn">DELETE</button>
                `
                formContainer.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitForm(formContainer);
                })
                document.querySelector('main').appendChild(formContainer);
            }
            let yesAdmitted = document.querySelector('fieldset input[value="1"]');
            let noAdmitted = document.querySelector('fieldset input[value="0"]');
            if(yesAdmitted) yesAdmitted.addEventListener('change', isAdmitted);
            if(noAdmitted) noAdmitted.addEventListener('change', isAdmitted);
            
            break;
        case "Patient_Disease":
            for (let i = 0; i < data.length; i++) {
                let formContainer = document.createElement('form');
                formContainer.setAttribute("id", "PatientID_" + data[i]['PatientID'] + "diesase_" + data[i]['disease'])
                formContainer.setAttribute("method", "DELETE")
                formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["PatientID"]}/${data[i]["disease"]}`)
                formContainer.innerHTML = `
                <div>
                    <label for="PatientID${i}">PatientID: </label>
                    <input type="text" name="PatientID" id="PatientID${i}" value="${data[i]['PatientID']}" required disabled>
                </div>
                <div>
                    <label for="disease${i}">disease: </label>
                    <input type="text" name="disease" id="disease${i}" value="${data[i]['disease']}" required disabled>
                </div>
                <button type="submit" class="deletebtn">DELETE</button>
                `
                formContainer.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitForm(formContainer);
                })
                document.querySelector('main').appendChild(formContainer);
            }
            break;
        case "Patient_Doctor":
            for (let i = 0; i < data.length; i++) {
                let formContainer = document.createElement('form');
                formContainer.setAttribute("id", "PatientID_" + data[i]['PatientID'] + "DoctorID_" + data[i]['DoctorID'])
                formContainer.setAttribute("method", "DELETE")
                formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["PatientID"]}/${data[i]["DoctorID"]}`)
                formContainer.innerHTML = `
                <div>
                    <label for="PatientID${i}">PatientID: </label>
                    <input type="text" name="PatientID" id="PatientID${i}" value="${data[i]['PatientID']}" required disabled>
                </div>
                <div>
                    <label for="DoctorID${i}">DoctorID: </label>
                    <input type="text" name="DoctorID" id="DoctorID${i}" value="${data[i]['DoctorID']}" required disabled>
                </div>
                <button type="submit" class="deletebtn">DELETE</button>
                `
                formContainer.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitForm(formContainer);
                })
                document.querySelector('main').appendChild(formContainer);
            }
            break;
        case "Patient_Treatment":
            for (let i = 0; i < data.length; i++) {
                let formContainer = document.createElement('form');
                formContainer.setAttribute("id", "PatientID_" + data[i]['PatientID'] + "TreatmentID_" + data[i]['TreatmentID'])
                formContainer.setAttribute("method", "DELETE")
                formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["PatientID"]}/${data[i]["TreatmentID"]}`)
                formContainer.innerHTML = `
                <div>
                    <label for="PatientID${i}">PatientID: </label>
                    <input type="text" name="PatientID" id="PatientID${i}" value="${data[i]['PatientID']}" required disabled>
                </div>
                <div>
                    <label for="TreatmentID${i}">TreatmentID: </label>
                    <input type="text" name="TreatmentID" id="TreatmentID${i}" value="${data[i]['TreatmentID']}" required disabled>
                </div>
                <button type="submit" class="deletebtn">DELETE</button>
                `
                formContainer.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitForm(formContainer);
                })
                document.querySelector('main').appendChild(formContainer);
            }
            break;
        case "Room":
            for (let i = 0; i < data.length; i++) {
                let formContainer = document.createElement('form');
                formContainer.setAttribute("id", "RoomID_" + data[i]['RoomID'])
                formContainer.setAttribute("method", "DELETE")
                formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["RoomID"]}`)
                formContainer.innerHTML = `
                <div>
                    <label for="RoomID${i}">RoomID: </label>
                    <input type="text" name="RoomID" id="RoomID${i}" value="${data[i]['RoomID']}" required disabled>
                </div>
                <div>
                    <fieldset id="Type${i}">
                        <legend>Type</legend>
                        <label for="ICU${i}">ICU: </label>
                        <input type="radio" name="Type" id="ICU${i}" value="ICU" ${data[i]['Type'] === 'ICU' ? "checked" : ""} disabled />
                        <label for="Operation Theater${i}">Operation Theater: </label>
                        <input type="radio" name="Type" id="Operation Theater${i}" value="Operation Theater" ${data[i]['Type'] === 'Operation Theater' ? "checked" : ""} disabled />
                        <label for="General">General: </label>
                        <input type="radio" name="Type" id="General${i}" value="General" ${data[i]['Type'] === 'General' ? "checked" : ""} disabled />
                    </fieldset>
                </div>
                <div>
                    <label for="RoomCostPerDay${i}">RoomCostPerDay: </label>
                    <input type="number" name="RoomCostPerDay" id="RoomCostPerDay${i}" value="${data[i]["RoomCostPerDay"]}" required disabled>
                </div>
                <button type="submit" class="deletebtn">DELETE</button>
                `
                formContainer.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitForm(formContainer);
                })
                document.querySelector('main').appendChild(formContainer);
            }
            break;
        case "Room_Boywards":
                for (let i = 0; i < data.length; i++) {
                    let formContainer = document.createElement('form');
                    formContainer.setAttribute("id", "RoomID_" + data[i]['RoomID'] + "WardboyID_" + data[i]['WardboyID'])
                    formContainer.setAttribute("method", "DELETE")
                    formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["RoomID"]}/${data[i]["WardboyID"]}`)
                    formContainer.innerHTML = `
                    <div>
                        <label for="RoomID${i}">RoomID: </label>
                        <input type="text" name="RoomID" id="RoomID${i}" value="${data[i]['RoomID']}" required disabled>
                    </div>
                    <div>
                        <label for="WardboyID${i}">WardboyID: </label>
                        <input type="text" name="WardboyID" id="WardboyID${i}" value="${data[i]['WardboyID']}" required disabled>
                    </div>
                    <button type="submit" class="deletebtn">DELETE</button>
                    `
                    formContainer.addEventListener('submit', (e) => {
                        e.preventDefault();
                        submitForm(formContainer);
                    })
                    document.querySelector('main').appendChild(formContainer);
                }
                break;
        case "Room_Nurses":
                for (let i = 0; i < data.length; i++) {
                    let formContainer = document.createElement('form');
                    formContainer.setAttribute("id", "RoomID_" + data[i]['RoomID'] + "NurseID_" + data[i]['NurseID'])
                    formContainer.setAttribute("method", "DELETE")
                    formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["RoomID"]}/${data[i]["NurseID"]}`)
                    formContainer.innerHTML = `
                    <div>
                        <label for="RoomID${i}">RoomID: </label>
                        <input type="text" name="RoomID" id="RoomID${i}" value="${data[i]['RoomID']}" required disabled>
                    </div>
                    <div>
                        <label for="NurseID${i}">NurseID: </label>
                        <input type="text" name="NurseID" id="NurseID${i}" value="${data[i]['NurseID']}" required disabled>
                    </div>
                    <button type="submit" class="deletebtn">DELETE</button>
                    `
                    formContainer.addEventListener('submit', (e) => {
                        e.preventDefault();
                        submitForm(formContainer);
                    })
                    document.querySelector('main').appendChild(formContainer);
                }
                break;
        case "Treatment":
            for (let i = 0; i < data.length; i++) {
                let formContainer = document.createElement('form');
                formContainer.setAttribute("id", "TreatmentID_" + data[i]['TreatmentID'])
                formContainer.setAttribute("method", "DELETE")
                formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["TreatmentID"]}`)
                formContainer.innerHTML = `
                    <div>
                        <label for="TreatmentID">TreatmentID: </label>
                        <input type="text" name="TreatmentID" id="TreatmentID${i}" value="${data[i]["TreatmentID"]}" required disabled>
                    </div>
                    <div>
                        <label for="Description${i}">Description: </label>
                        <input type="text" name="Description" id="Description${i}" value="${data[i]["Description"]}" required disabled>
                    </div>
                    <div>
                        <label for="TreatmentCost${i}">TreatmentCost: </label>
                        <input type="number" name="TreatmentCost" id="TreatmentCost${i}" value="${data[i]["TreatmentCost"]}" required disabled>
                    </div>
                    <button type="submit" class="deletebtn">DELETE</button>
                `
                formContainer.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitForm(formContainer);
                })
                document.querySelector('main').appendChild(formContainer);
            }
            break;
        case "Wardboy":
            for (let i = 0; i < data.length; i++) {
                let formContainer = document.createElement('form');
                formContainer.setAttribute("id", "WardboyID_" + data[i]['WardboyID'])
                formContainer.setAttribute("method", "DELETE")
                formContainer.setAttribute("action", `http:localhost:3201/${table}/${data[i]["WardboyID"]}`)
                formContainer.innerHTML = `
                    <div>
                        <label for="WardboyID${i}">WardboyID: </label>
                        <input type="text" name="WardboyID" id="WardboyID${i}" value="${data[i]["WardboyID"]}" required disabled>
                    </div>
                    <div>
                        <label for="firstName${i}">firstName: </label>
                        <input type="text" name="firstName" id="firstName${i}" value="${data[i]["firstName"]}" required disabled>
                    </div>
                    <div>
                        <label for="lastName${i}">lastName: </label>
                        <input type="text" name="lastName" id="lastName${i}" value="${data[i]["lastName"]}" required disabled>
                    </div>
                    <div>
                        <label for="PhoneNumber${i}">PhoneNumber: </label>
                        <input type="text" name="PhoneNumber" id="PhoneNumber${i}" value="${data[i]["PhoneNumber"]}" required disabled>
                    </div>
                    <button type="submit" class="deletebtn">DELETE</button>
                `
                formContainer.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitForm(formContainer);
                })
                document.querySelector('main').appendChild(formContainer);
            }
            break;
    }
}
/* End of CRUD functions */

async function getIDs(table, tableID) {
    let tableData;
    let selectTable;
    await fetch (`http://localhost:3201/${table}`, { method: 'GET' })
            .then((response) => {return response.json()})
            .then((values) => tableData = values);
    if(tableID) {
        selectTable = document.querySelector(`#${table}ID${tableID}`)
    }
    else {
        selectTable = document.querySelector(`select[name="${table}ID"]`)
    }
    for(let i = 0; i < tableData.length; i++) {
        let option = document.createElement('option');
        option.setAttribute('value', tableData[i][`${table}ID`]);
        option.innerText = tableData[i][`${table}ID`];
        selectTable.appendChild(option);
    }
}


/* Functions and functionality */
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function isAdmitted(event) {
    if ( event ) {
        let eventID = event.target.id.slice(-1);
        let AdmissionDateDiv = document.querySelector(`#AdmissionDateDiv${eventID}`);
        let DischargeDateDiv = document.querySelector(`#DischargeDateDiv${eventID}`);
        
        if (document.querySelector(`#yes${eventID}`).checked) {
            AdmissionDateDiv.setAttribute('style', 'display: block;');
            DischargeDateDiv.setAttribute('style', 'display: block;');
        } else {
        AdmissionDateDiv.setAttribute('style', 'display: none;');
        DischargeDateDiv.setAttribute('style', 'display: none;');
        }
    } else {
        let AdmissionDateDiv = document.querySelector('#AdmissionDateDiv');
        let DischargeDateDiv = document.querySelector('#DischargeDateDiv');
        
        if (document.querySelector('#Admitted #yes').checked) {
            AdmissionDateDiv.setAttribute('style', 'display: block;');
            DischargeDateDiv.setAttribute('style', 'display: block;');
        } else {
        AdmissionDateDiv.setAttribute('style', 'display: none;');
        DischargeDateDiv.setAttribute('style', 'display: none;');
        }
    }
}

async function submitForm(formContainer) {
    let form;
    if (formContainer) {
        form = document.querySelector(`#${formContainer.getAttribute('id')}`)
        console.log(form);
        const formData = new FormData(form);
        const queryString = new URLSearchParams(formData).toString();
    
        const urlWithQueryString = form.action + '?' + queryString;
        const method = form.getAttribute('method');
    
        await fetch(`${urlWithQueryString}`, { method: method })
            .then(async (response) => {
                response = await response.text()
                if (response.startsWith("Error:")) {
                    alert(response);
                }
            });
    }
    else {
        form =  document.querySelector('form');
        
        const formData = new FormData(form);
        const queryString = new URLSearchParams(formData).toString();
        
    
        const urlWithQueryString = form.action + '?' + queryString;
        const method = document.querySelector('form').getAttribute('method');
    
        await fetch(`${urlWithQueryString}`, { method: method } )
                .then(async (response) => { console.log(await response.text()) });
    }
    window.location.reload();
}


/* Global Variables */
var method = "";
var table = "";
var dateNow = new Date();
var { currentYear, currentMonth, currentDay } = { currentYear: dateNow.getFullYear(), currentMonth: dateNow.getMonth(), currentDay: dateNow.getDay() };



/* Script start from here ↓ */
/* Script starts from here ↓ */
if (window.location.href.includes("tables.html")) {
  method = getQueryParam("method");
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
      link.setAttribute("href", `${link.getAttribute("href")}` + method);
    });

  if(method === "PUT") document.querySelector("#Bill").remove();
} else if (window.location.href.includes("forms.html")) {
  const { method, table } = { method: getQueryParam("method"), table: getQueryParam("table") };
  
  document.querySelector('header p').textContent = table;
  
  let form = document.querySelector('form');
  let action = `http://localhost:3201/${table}`;
  form.setAttribute('action', action);
  form.setAttribute("method", method);

  switch (method) { 
    case "POST":
        handleCreate(form, table);
        break;
    case "GET":
        handleRead(form, table);
        break;
    case "PUT":
        handleUpdate(form, table);
        break;
    case "DELETE":
        handleDelete(form, table);
        break;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitForm();
  })
}


