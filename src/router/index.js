import Vue from 'vue'
import Router from 'vue-router'
import ListEstablishment from '@/components/Establishment/ListEstablishment'
import AddEstablishment from '@/components/Establishment/AddEstablishment'
import ListPlace from '@/components/Place/ListPlace'
import AddPlace from '@/components/Place/AddPlace'
import ListChair from '@/components/Chair/ListChair'
import AddChair from '@/components/Chair/AddChair'

Vue.use(Router)

export default new Router({
	routes : [
		{
			path : '/establishments',
			name : 'ListEstablishment',
			component : ListEstablishment
		},
		{
			path:  '/add_establishment',
			name : 'AddEstablishment',
			component : AddEstablishment
		},
		{
			path : '/places',
			name : 'ListPlaces',
			component : ListPlace
		},
		{
			path : '/add_place',
			name : 'AddPlace',
			component : AddPlace
		},
		{
			path : '/chairs',
			name : 'ListChairs',
			component : ListChair
		},
		{
			path : '/add_chair',
			name : 'AddChair',
			component : AddChair
		}
	],
	mode : 'history'
})