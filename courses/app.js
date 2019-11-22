var study = new Vue({
    el: '#filters',
    data: {
        courses: [
            { topic: 'Maths', location: 'Hendon', price: 100 },
            { topic: 'Maths', location: 'Colindale', price: 80 },
            { topic: 'Maths', location: 'Brent_Cross', price: 90 },
            { topic: 'Maths', location: 'Golders_Green', price: 120 },

            { topic: 'English', location: 'Hendon', price: 100 },
            { topic: 'English', location: 'Colindale', price: 80 },
            { topic: 'English', location: 'Brent_Cross', price: 90 },
            { topic: 'English', location: 'Golders_Green', price: 120 },

            { topic: 'Science', location: 'Hendon', price: 100 },
            { topic: 'Science', location: 'Colindale', price: 80 },
            { topic: 'Science', location: 'Brent_Cross', price: 90 },
            { topic: 'Science', location: 'Golders_Green', price: 120 },

            { topic: 'Sports', location: 'Hendon', price: 100 },
            { topic: 'Sports', location: 'Colindale', price: 80 },
            { topic: 'Sports', location: 'Brent_Cross', price: 90 },
            { topic: 'Sports', location: 'Golders_Green', price: 120 },

        ],
        maths: [
            { topic: 'Maths', location: 'Hendon', price: 100 },
            { topic: 'Maths', location: 'Colindale', price: 80 },
            { topic: 'Maths', location: 'Brent_Cross', price: 90 },
            { topic: 'Maths', location: 'Golders_Green', price: 120 },
        ],
        english: [
            { topic: 'English', location: 'Hendon', price: 100 },
            { topic: 'English', location: 'Colindale', price: 80 },
            { topic: 'English', location: 'Brent_Cross', price: 90 },
            { topic: 'English', location: 'Golders_Green', price: 120 },
        ],
        science: [
            { topic: 'Science', location: 'Hendon', price: 100 },
            { topic: 'Science', location: 'Colindale', price: 80 },
            { topic: 'Science', location: 'Brent_Cross', price: 90 },
            { topic: 'Science', location: 'Golders_Green', price: 120 },
        ],
        sports: [
            { topic: 'Sports', location: 'Hendon', price: 100 },
            { topic: 'Sports', location: 'Colindale', price: 80 },
            { topic: 'Sports', location: 'Brent_Cross', price: 90 },
            { topic: 'Sports', location: 'Golders_Green', price: 120 },
        ],
        sortKey: '',
        sortSettings: [
            { 'topic': true },
            { 'location': true },
            { 'price': true }
        ],
        desc: true
    },
    methods: {
        orderBy: function (sorKey) {
            this.sortKey = sorKey
            this.sortSettings[sorKey] = !this.sortSettings[sorKey]
            this.desc = this.sortSettings[sorKey]

        }
    }
});
