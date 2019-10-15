<template>
    <div>
        <table>
            <th> Places </th>
            <tbody>
                <tr v-for="(item, index) in places" :key="index">
                    <td>{{item.establishment_place.establishment_name}}</td>
                    <td>{{item.place_category}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import axios from 'axios'
    
    export default {
        data(){
            return {
                fields : [
                    { key : 'establishment_place', label : 'Establishment Place' },
                    { key : 'place_category', label : 'Place Category' }
                ],
                places : []
            }
        },
        methods: {
            getPlaces(){
                const path = 'http://localhost:8000/api/1.0/establishments/place/'
                axios.get( path ).then(( response ) => {
                    console.log( response.data )
                    this.places = response.data
                })
                .catch(( error ) => {
                    console.log( error );
                })
            }
        },
        created(){
            this.getPlaces()
        }
    }
</script>