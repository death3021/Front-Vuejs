<template>
    <div>
        <form @submit.prevent="onSubmit">
            <div>
                <select name="establishment_name" class="form-control" placeholder="Establishment Place" v-model.trim="form.establishment_place">
                    <option v-for="(item, index) in establishments" :key="index" :value="item.id"> {{ item['establishment_name'] }}</option>
                </select>
            </div>
            <div>
                <input name="place_category" class="form-control" placeholder="Category place" v-model.trim="form.place_category">
            </div>
            <div class="col text-left">
                <button type="submit" variant="primary">Create Place</button>
            </div>
        </form>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data(){
            return {
                form : {
                    establishment_place: '',
                    place_category : ''
                },
                establishments : []
            }
        },
        methods : {
            getEstablishments(){
                const path = 'http://localhost:8000/api/1.0/establishments/establishment/'
                axios.get( path ).then(( response ) => {
                    console.log( response.data )
                    this.establishments = response.data
                })
                .catch(( error ) => {
                    console.log( {error} )
                })
            },
            onSubmit(){
                console.log('entra')
                const path = 'http://localhost:8000/api/1.0/establishments/place/'
                console.log(this.form)
                axios.post( path, this.form ).then(( response ) => {
                    this.form.establishment_name = response.data.establishment_place
                    this.form.place_category = response.data.place_category
                    alert("se agrego el lugar al establesimiento")
                    this.$router.push('/places')
                })
                .catch(( error ) => {
                    console.log( {error} )
                })
            }
        },
        created() {
            this.getEstablishments()
        }
    }
</script>