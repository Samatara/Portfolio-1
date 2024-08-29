document.addEventListener('DOMContentLoaded', ()=>{
    const pro_list = document.getElementById('pro_list')
    const form = document.getElementById('project-form')
    
    fetch('portofolio.Json')
        .then (Response=> Response.json())
        .then (jsdata => {
            jsdata.projects.forEach(project => {
                const pro_div = document.createElement('div');
                const p_title = document.createElement('h2');
                p_title.textContent =project.name;
                const p_description = document.createElement('p');
                p_description.textContent= project.description;

                pro_div.appendChild(p_title);
                pro_div.appendChild(p_description);
                pro_list.appendChild(pro_div)
                
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


