import Vue from 'vue'
import Router from 'vue-router'
import ListEstablishment from '@/components/Establishment/ListEstablishment'


Vue.use(Router)

export default new Router({
	routes : [
		{
			path : '/establishments',
			name : 'ListEstablishment',
			component : ListEstablishment
		},
	],
	mode : 'history'
})