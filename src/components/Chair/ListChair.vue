<template>
    <div>
        <table>
            <th> Chairs </th>
            <tbody>
                <tr v-for="(item, index) in chairs" :key="index">
                    <td>{{item.chair_category_place.place_category}}</td>
                    <td>{{item.number_chair}}</td>
                    <td>{{item.chair_state}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data(){
            return{
                fields : [
                    { key : 'chair_category_place', label : 'Category of Place' },
                    { key : 'number_chair', label : 'Number of chair' },
                    { key : 'chair_state', label : 'Chair state' }
                ],
                chairs : []
            }
        },
        methods: {
            getChairs(){
                const path = 'http://localhost:8000/api/1.0/establishments/chair/'
                axios.get( path ).then(( response ) => {
                    console.log( response.data )
                    this.chairs = response.data
                })
                .catch(( error ) => {
                    console.log( error );
                })
            }
        },
        created(){
            this.getChairs()
        }
    }
</script>