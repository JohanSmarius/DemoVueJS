const courseDetails = {
    name: 'course-details',
    template: `<div>
                    <div>
                        <label for="name">Name</label><input v-model="course.Name" name="name" v-validate="'required'"></input>
                        <span>{{ errors.first('name') }}</span>
                    </div>
                    <div>{{course.Date}}</div>
                    <div>
                        <label for="duration">Duration</label><input v-model="course.Duration" name="duration" type="number" v-validate="{ min_value: 0, max_value:100 }"></input>
                        <span>{{ errors.first('duration') }}</span>
                        <span v-if="isInvalidDuration">Duration > 0</span>
                    </div>

                    <div>{{course.Duration}}</div>
                    <div>{{course.Teacher}}</div>
                    <div>{{this.numberOfStudents}}</div>
                    <div><button v-on:click="addStudent(course.Id)">RSVP</button></div>
                    <div><button @click="save()">Save changes</button></div>
                </div>`,
    data() {
        return {
            numberOfStudents: 0
        }
    },
    props: ['course', 'courses'],
    methods: {
        addStudent(courseId) {
            this.numberOfStudents++;
            EventBus.$emit('add-student',
                {
                    data: {
                        count: this.numberOfStudents
                    }
                });
        },
        saveChanges() {
        }
    },
    computed: {
        isInvalidDuration() {
            return this.course.Duration <= 0;
        }

    }
};
