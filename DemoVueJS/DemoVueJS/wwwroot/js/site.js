// Write your JavaScript code.
const EventBus = new Vue();

Vue.use(VeeValidate);

const router = new VueRouter({
    routes // short for `routes: routes`
});

var app = new Vue({
    el: "#app",
    router,
    data: {
        message: "Hello from VueJS",
        Courses: store.state.courses,
        totalNumberOfStudents: 0,
    },
    created() {
        // Ctor
        EventBus.$on("add-student", e => this.totalNumberOfStudents += e.data.count);
    },
    filters: {
        capitalize: function (value) {
            return value.toUpperCase();
        }
    },
    computed: {
        sortedCourses() {
            return this.Courses.sort((a, b) => {
                if (a.startdate < b.startdate) {
                    return -1;
                }

                if (a.startdate === b.startdate) {
                    return 0;
                }

                if (a.startdate > b.startdate) {
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
        addStudent(courseId) {

            const selectedCourse = this.Courses.find(course => course.id === courseId);
            selectedCourse.NumberOfStudents++;
        },
        getCourses() {
            store.getCourses();
        },
    },
    components: {
        'course-details': courseDetails
    }
});