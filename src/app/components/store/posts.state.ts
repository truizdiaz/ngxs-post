import { Action, State, StateContext } from "@ngxs/store";
import { AgregarPost, EliminarPost } from "./posts.actions";
import { PostsStateModel } from "./posts.model";


@State<PostsStateModel>({
    name: 'posts',
    defaults: {
        listPosts: []
    }
})

export class PostSate {

    /* @Action(AgregarPost) agregar(ctx: StateContext<PostsStateModel>, action: AgregarPost) {
        const state = ctx.getState();

        ctx.setState({
            ...state,
            listPosts: [
                ...state.listPosts,
                action.payload
            ]
        })
    } */

 /*    @Action(AgregarPost) agregar({ getState, setState }: StateContext<PostsStateModel>, { payload }: AgregarPost) {
        setState({
            ...getState(),
            listPosts: [
                ...getState().listPosts,
                payload
            ]
        })
    } */

    @Action(AgregarPost) agregarPost({ getState, patchState }: StateContext<PostsStateModel>, { payload }: AgregarPost) {
        patchState({
            listPosts: [
                ...getState().listPosts,
                payload
            ]
        })
    }

    @Action(EliminarPost) eliminarPost({ getState, patchState }: StateContext<PostsStateModel>, { id }: EliminarPost) {
        patchState({
            listPosts: [
                ...getState().listPosts.filter(post => post.id !== id)
            ]
        })
    }

}