document.addEventListener('DOMContentLoaded', ()=>{
    const pro_list = document.getElementById('pro_list')
    const form = document.getElementById('New-project')
    
    fetch('portofolio.Json')
        .then (Response=> Response.json())
        .then (jsdata => {
            jsdata.projects.forEach(project => {
               pro_list.innerHTML= `<h2>${project.name}</h2>
                <p>${project.description}</p>`;
                pro_list.appendChild(list)
                
            });
        })


    form.addEventListener('submit',(event)=>{
        event.preventDefault();
        const projectName = document.getElementById('name').value;
        const projectDescription = document.getElementById('description').value;
        
        const new_projects={
            name:projectName,
            description: projectDescription
        };

        const list = document.createElement('ul');
        list.innerHTML= 
        `<li>${new_projects.name}</li>
        <li>${new_projects.description}</li>`;
        pro_list.appendChild(list);
        form.reset();
    })
})


