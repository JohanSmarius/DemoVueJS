const store = {
    state: {
        courses: [
            {
                id: 1,
                name: "VueJS With ASP.NET Core",
                startdate: "2018-06-15",
                duration: 10,
                teacher: "Johan",
                //NumberOfStudents: 0
            },
            {
                id: 2,
                name: "TypeScript for .NET Developers",
                startdate: "2018-06-01",
                duration: 5,
                teacher: "Johan",
                //NumberOfStudents: 0
            }
        ]
    },
    pushCourse(newCourse) {
        this.state.courses.push(newCourse);
    },
    getCourses() {
        axios.get('/api/Course')
            .then(response => {
                for (i = 0; i < response.data.length; i++) {
                    this.pushCourse(response.data[i]);
                }
            });

    },
    addStudent(eventDetails) {
        axios.post('/api/Course/id')
            .then(response => {
                for (i = 0; i < response.data.length; i++) {
                    this.pushCourse(response.data[i]);
                }
            });
    }
};