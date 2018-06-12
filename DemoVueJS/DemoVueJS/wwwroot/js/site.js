
const EventBus = new Vue();

Vue.use(VeeValidate);

const router = new VueRouter({
    routes // short for `routes: routes`
});


var app = new Vue({
    el: '#app',
    router,
    data: {
        message: 'Hello from VueJS',
        Courses: undefined,
        Courses: [
            {
                Id: 1,
                Name: "VueJS With ASP.NET Core",
                Date: "2018-06-15",
                Duration: 10,
                Teacher: "Johan",
                //NumberOfStudents: 0
            },
            {
                Id: 2,
                Name: "TypeScript for .NET Developers",
                Date: "2018-06-01",
                Duration: 5,
                Teacher: "Johan",
                //NumberOfStudents: 0
            }
        ],
        totalNumberOfStudents: 0
    },
    created() {
        // Ctor
        //EventBus.$on("add-student", e => this.totalNumberOfStudents += e.data.count);
    },
    computed: {
        sortedCourses() {
            return this.Courses.sort((a, b) => {
                if (a.Date < b.Date) {
                    return -1;
                }

                if (a.Date === b.Date) {
                    return 0;
                }

                if (a.Date > b.Date) {
                    return 1;
                }

            });
        },
        //totalNumberOfStudents() {
        //    var total = 0;
        //    this.Courses.forEach(function(course) {
        //        total = total + course.NumberOfStudents;
        //    });
        //    return total;
        //}
    },
    methods: {
        //addStudent(courseId) {

        //    const selectedCourse = this.Courses.find(course => course.Id === courseId);
        //    selectedCourse.NumberOfStudents++;
        //}
        getCourses() {
            // Ctor
            //EventBus.$on("add-student", e => this.totalNumberOfStudents += e.data.count);
            axios.get('/api/Course')
                .then(response => {
                    for (i = 0; i < response.data.length; i++) {
                        this.Courses.push(response.data[i]);
                    }
                    //app.$forceUpdate()

                });
        },

    },
    components: {
        'course-details': courseDetails
    }
});
