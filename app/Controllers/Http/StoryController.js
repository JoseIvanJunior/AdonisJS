'use strict'

const Story = use('App/Models/Story')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with stories
 */
class StoryController {
  /**
   * Show a list of all stories.
   * GET stories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const stories = Story.all()

    return stories
  }

  /**
   * Create/save a new story.
   * POST stories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request }) {
    const { id } = auth.user
    const data = request.only([
      'place',
      'description',
      'hashtags'
    ])

    const post = await Post.create({ ...data, user_id: id })
    
    return post
  }

  /**
   * Display a single story.
   * GET stories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update story details.
   * PUT or PATCH stories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a story with id.
   * DELETE stories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = StoryController
