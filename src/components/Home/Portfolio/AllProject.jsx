import React from 'react';

const AllProject = () => {
    const projectData = [
        {
            id: 1,
            link: 'https://doc-technical-client.web.app/',
            projectName: 'Doc Technical',
            text: 'Online Course',
            imgurl: 'https://i.ibb.co/dgM0xWt/istockphoto-1341094505-612x612.jpg'
        },
        {
            id: 2,
            link: 'https://cleaning-man.web.app/',
            projectName: 'Clean East',
            text: 'Online Cleaning Service',
            imgurl: 'https://i.ibb.co/StrcW8Z/istockphoto-520021633-612x612.jpg'
        },
        {
            id: 3,
            link: 'https://quizzy-program.netlify.app/home',
            projectName: 'Quizzy',
            text: 'Online quizz',
            imgurl: 'https://i.ibb.co/K0LhCBG/question-mark-5475172-340.jpg'
        },
        {
            id: 4,
            link: 'https://email-password-auth-953b5.web.app/',
            projectName: 'OLDBazaar',
            text: 'Resaler Website',
            imgurl: 'https://i.ibb.co/ssC2691/istockphoto-155354273-612x612.jpg'
        },
        {
            id: 5,
            link: 'https://brigate-construction.netlify.app/',
            projectName: 'Brigate',
            text: 'Construction consultation',
            imgurl: 'https://i.ibb.co/3N0MvrC/istockphoto-1385368397-612x612.jpg'
        },
    ]
    return (
        <div className='px-4 lg:px-24 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                projectData.map(project => <a
                    href={project.link} class="group relative block bg-black h-[250px] lg:h-full rounded-lg"
                    key={project.id}
                    target="_blank"
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