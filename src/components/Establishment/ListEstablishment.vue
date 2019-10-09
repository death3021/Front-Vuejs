<template>
	<table>
		<th>
			hola
		</th>
		<tbody>
			<tr v-for="establishment in establishments"></tr>
			<td>{{establishment.establishment_name}}</td>
		</tbody>
	</table>
</template>

<script>
	import axios from 'axios';

	export default {
		data(){
			return {
				fields : [
					{ key : 'establishment_name', label : 'Name' },
					{ key : 'establishment_location', label : 'Locations' },
					{ key : 'total_quota', label : 'Total quota' }
				],
				establishments : []
			}
		},
		methods : {
			getEstablishments(){
				const path = 'http://localhost:8000/api/1.0/establishments/establishment/'
				axios.get(path).then((response) => {
					this.establishments = response.data
				})
				.catch((error) => {
					console.log(error);
				})
			}
		},
		created(){
			this.getEstablishments()
		}
	}

</script>