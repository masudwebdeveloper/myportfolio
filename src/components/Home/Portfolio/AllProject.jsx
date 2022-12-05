import React from 'react';

const AllProject = () => {
    const projectData = [
        {
            id: 1,
            link: 'https://doc-technical-client.web.app/',
            projectName: 'Doc Technical',
            text: 'Online Course',
            imgurl: 'https://i.ibb.co/HD4qsjV/doc-technical.png'
        },
        {
            id: 2,
            link: 'https://cleaning-man.web.app/',
            projectName: 'Clean East',
            text: 'Online Cleaning Service',
            imgurl: 'https://i.ibb.co/wLPkc59/clean-east.png'
        },
        {
            id: 3,
            link: 'https://quizzy-program.netlify.app/home',
            projectName: 'Quizzy',
            text: 'Online quizz',
            imgurl: 'https://i.ibb.co/KXhXHs9/quizzy.png'
        },
        {
            id: 4,
            link: 'https://email-password-auth-953b5.web.app/',
            projectName: 'OLDBazaar',
            text: 'Resaler Website',
            imgurl: 'https://i.ibb.co/4P6Qqqt/oldbazaar.png'
        },
    ]
    return (
        <div className='px-24 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                projectData.map(project => <a
                    href={project.link} class="group relative block bg-black"
                    key={project.id}
                >
                    <img
                        alt="Developer"
                        src={project.imgurl}
                        class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 content-fit"
                    />

                    <div class="relative p-8">
                        <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                            {project.text}
                        </p>

                        <p class="text-2xl font-bold text-white">{project.projectName}</p>

                        <div class="mt-64">
                            <div
                                class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p class="text-sm text-white">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                    perferendis hic asperiores quibusdam quidem voluptates doloremque
                                    reiciendis nostrum harum. Repudiandae?
                                </p>
                            </div>
                        </div>
                    </div>
                </a>)
            }
        </div>


    );
};

export default AllProject;