const all_projects=
`Here are some major projects,

[1] LucidSLAM - A VSLAM toolkit with Deep Learning features.
[2] Kofi - A Minimal launcher for Android.
[3] Rewise - A Revision Scheduling Application.
[4] OpenPOS - A Free Point of Sale Application.
[5] KernelSandbox - A Sandbox to try various kernels.

To get details run : "projects <number> -d"
Example: "projects 1 -d"
`

var prange = [1,2,3,4,5]

function details(p) {
    switch(p){
        case 1:
            return (
`Title : LucidSLAM
Duration : [Aug 2021 - Present]
Abstract :-
Here we are trying to make a toolkit of VSLAM algorithm
with latest Deep Learning application like panoptic segmentation.
This toolkit will make Autonomous mobile robotics easier and better.
Area : Deep Learning, Computer Vision.

GitHub : run 'projects <number> -g'
`);
            break;
        case 2:
            return (
`Title : Kofi
Duration : [Oct 2018 - Dec 2018]
Abstract :-
Made a minimal and functional android launcher
using native android development using JAVA,
Android SDK.
Area : Android Development, JAVA

GitHub : run 'projects <number> -g'
`);
            break;
        case 3:
            return (
`Title : Rewise
Duration : [Jul 2020 - Sept 2020]
Abstract :-
Study is hardly valuable if you don't remember anything.
Rewise is a Flutter based application that manages,
schedules and tracks Revision for students.
Based on Leitner spaced repetition. 
Area : Flutter, Cross-Platform Development.

GitHub : run 'projects <number> -g'
`);
            break;
        case 4:
            return (
`Title : OpenPOS
Duration : [Jul 2019 - Aug 2019]
Abstract :-
A free to use Point of Sale and Inventory Management
Application made with flutter.
Area : Flutter, Cross-Platform Development.

GitHub : run 'projects <number> -g'
`);
            break;   
        case 6:
            return (
`Title : Kernel SandBox
Duration : [Dec 2021 - Dec 2021]
Abstract :-
A fun sandbox / playgorund to try various kernels
on images and see the result. Good for learning
how convolution and kernels work.
Area : Web development, WebGL, Image Processing.

GitHub : run 'projects <number> -g'
`);
            break;   
    }
}

function projects(command) {
    if(command === 'projects'){
        return all_projects;
    }
    else{
        var coms = command.split(' ');
        if(prange.includes(parseInt(coms[1]))){
            if(coms[2] === '-d'){
                return details(parseInt(coms[1]));
            }
            else{
                if(coms[2] === '-g'){
                    return 'github repos not linked yet.'
                }
                else{
                    return coms[2] +  ' is not a valid action for projects, \ntry -d (for deatils), -g (for GitHub Repo)'
                }
            }
        }
        else{
            return 'project number ' + coms[1] + ' not listed.'
        }
    }
}

export {projects}