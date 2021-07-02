//Job Class: Represents a Job
class Job {
    constructor(title, client, contractNo) {
        this.title = title;
        this.client = client;
        this.contractNo = contractNo;
    }
}

//UI Class: Handle UI Tasks
class UI {
    static displayJobs() {

        const jobs = Store.getJobs();
        if(jobs.length != 0){
            jobs.forEach((job) => UI.addJobToList(job))
        };
        
    }

    static addJobToList(job) {
        const list = document.querySelector('#jobs-list');

        const row = document.createElement('tr');
        
        row.innerHTML = 
        `
        <td>${job.title}</td>
        <td>${job.client}</td>
        <td>${job.contractNo}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteJob(el) {
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
            UI.showAlert('Job Deleted', 'success');
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#job-form');
        container.insertBefore(div, form);
        //Clears after 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(),5000);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#client').value = '';
        document.querySelector('#contractNo').value = '';
    }
}

//Store Class: Handles Storage (Local)
class Store {
    static getJobs(){
        let jobs;
        if(localStorage.getItem('jobs') === null) {
            jobs = [];
        } else {
            jobs = JSON.parse(localStorage.getItem('jobs'));
        }
        jobs = [1];
        return jobs;
    }

    static addJob(job){
        const jobs = Store.getJobs();
        jobs.push(job);
        localStorage.setItem('jobs',JSON.stringify(jobs));
    }

    static removeJob(contractNo){
        const jobs = Store.getJobs();
        console.log(contractNo);
        
        jobs.forEach((job, index) => {
            if(job.contractNo === contractNo) {
                console.log(job.contractNo);
                jobs.splice(index, 1);
                
            }
        });
        localStorage.setItem('jobs', JSON.stringify(jobs));
    }
}


//Event: Display Jobs
document.addEventListener('DOMContentLoaded', UI.displayJobs);


//Event: Add Job
document.querySelector('#job-form').addEventListener('submit', (e) => {
    //prevent actual submit
    e.preventDefault();

    //get form value
    const title = document.querySelector('#title').value;
    const client = document.querySelector('#client').value;
    const contractNo = document.querySelector('#contractNo').value;

    //Validate
    if(title === '' || client === '' || contractNo === '') {
        UI.showAlert('Please input all fields', 'warning');
    }
    else {
        //Instantiate Job
        const job = new Job(title, client, contractNo);

    //add job to list
    UI.addJobToList(job);
    console.log(job);
    //add job to store
    Store.addJob(job);

    UI.showAlert('Job Added', 'success');

    //Clear fields
    UI.clearFields();
    }
});


//Event: Remove a Job
document.querySelector('#jobs-list').addEventListener('click', (e) => {
    //Remove job from UI
    UI.deleteJob(e.target);

    //Remove job from Store
    Store.removeJob(e.target.parentElement.previousElementSibling.textContent);
    

})


