<template>
    <div class="container">
        <form @submit="onSubmit">
            <div>
                <input type="text" required placeholder="Establishment Name" name="establishment_name" class="form-control" v-model.trim="form.establishment_name">
            </div>
            <div>
                <input name="establishment_location" class="form-control" placeholder="Establishment Location" v-model.trim="form.establishment_location">
            </div>
            <div>
                <input type="number" class="form-control" name="total_quota" placeholder="Total Quota" v-model.trim="form.total_quota">
            </div>
            <div class="col text-left">
                <button type="submit" variant="primary">Create Establishment</button>
            </div>
        </form>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        data(){
            return {
                form : {
                    establishment_name : '',
                    establishment_location : '',
                    total_quota : ''

                }
            }
        },
        methods : {
            onSubmit( event ){
                event.preventDefault()
                const path = 'http://localhost:8000/api/1.0/establishments/establishment/'
                axios.post( path, this.form ).then(( response ) => {
                    alert("se agrego")
                    this.$router.push('/establishments') 
                })
                .catch(( error ) => {
                    console.log(error)
                })
            }
        },
        created(){
        }
    }
</script>