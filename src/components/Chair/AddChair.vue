<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div>
                <select name="chair_category_place" class="form-control" placeholder="Category place" v-model.trim="form.chair_category_place">
                    <option v-for="(item, index) in places" :key="index" :value="item.id"> {{ item['place_category'] }}</option>
                </select>
            </div>
            <div>
                <input name="number_chair" class="form-control" placeholder="Number Chair" v-model.trim="form.number_chair">
            </div>
            <div>
                <input name="chair_state" class="form-control" placeholder="State Chair" v-model.trim="form.chair_state">
            </div>
            <div class="col text-left">
                <button type="submit" variant="primary">Create Chair</button>
            </div>
        </form>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data(){
            return{
                form : {
                    chair_category_place : '',
                    number_chair : '',
                    chair_state : ''
                },
                places : []
            }
        },
        methods: {
            getPlaces(){
                const path = 'http://localhost:8000/api/1.0/establishments/place/'
                axios.get ( path ).then(( response ) => {
                    console.log( response.data )
                    this.places = response.data
                })
                .catch(( error ) => {
                    console.log( { error } )
                })
            },
            onSubmit(){
                const path = 'http://localhost:8000/api/1.0/establishments/chair/'
                axios.post( path, this.form ).then(( response ) => {
                    alert("se agrego silla al lugar")
                    this.$router.push('/chairs') 
                })
                .catch(( error ) => {
                    console.log( { error } )
                })
            }
        },
        created(){
            this.getPlaces()
        }
    }
</script>
