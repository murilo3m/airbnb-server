'use strict'
const Property = use('App/Models/Property')

/**
 * Resourceful controller for interacting with properies
 */
class ProperyController {
	/**
	 * Show a list of all properies.
	 * GET properies
	 */
	async index ({ request, response, view }) {
		const properties = Property.all()
  		return properties
	}

	/**
	 * Create/save a new propery.
	 * POST properies
	 */
	async store ({ request, response }) {
	}

	/**
	 * Display a single propery.
	 * GET properies/:id
	 */
	async show ({params}) {
		const property = await Property.findOrFail(params.id)
		await property.load('images')
		return property
	}

	/**
	 * Update propery details.
	 * PUT or PATCH properies/:id
	 */
	async update ({ params, request, response }) {
	}

	/**
	 * Delete a propery with id.
	 * DELETE properies/:id
	 */
	async destroy ({ params, auth, response }) {
		const property = await Property.findOrFail(params.id)
	  
		if (property.user_id !== auth.user.id) {
		  	return response.status(401).send({ error: 'Not authorized' })
		}
	  
		await property.delete()
	}
}

module.exports = ProperyController
