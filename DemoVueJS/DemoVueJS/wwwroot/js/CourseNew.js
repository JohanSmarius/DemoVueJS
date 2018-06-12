const courseNew = {
    name: 'course-new',
    template: `<div>
                    <span>You can add a new course here</span>
                    <span><button v-on:click="addCourse()">Add</button></span>
                </div>`,
    data() {
        return {
            name: "",
            duration: 0
        }
    },
    methods: {
        addCourse() {
            EventBus.$emit('add-course',
                {
                    data: {
                        name: this.name,
                        duration: this.duration
                    }
                });
        }
    }
};
