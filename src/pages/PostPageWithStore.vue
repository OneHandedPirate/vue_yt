<template>
    <div>
        <h1>Страница с постами через стор</h1>
        <my-input
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
            placeholder="Поиск..."
            v-focus
        />
        <div class="app_btns">
            <my-button @click="showDialog">Создать пост</my-button>
            <my-select
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
                :options="sortOptions"
            />
        </div>

        <my-dialog v-model:show="dialogVisible">
            <post-form
                @create="createPost"
            />
        </my-dialog>
        <post-list
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
            v-if="!isPostsLoading"
        />
        <div v-else>Идет загрузка...</div>
        <div v-intersection="loadMorePosts" class="observer"></div>
<!--              <div class="page_wrapper">-->
<!--                  <div-->
<!--                      v-for="pageNumber in totalPages"-->
<!--                      :key="pageNumber" class="page"-->
<!--                      :class="{'current-page': page === pageNumber}"-->
<!--                      @click="changePage(pageNumber)"-->
<!--                  >-->
<!--                      {{ pageNumber }}-->
<!--                  </div>-->
<!--              </div>-->
    </div>

</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";

export default {
    name: "App",
    components: {
        MyInput,
        MySelect,
        MyButton,
        MyDialog,
        PostForm, PostList,
    },
    data() {
        return {
            dialogVisible: false,
        }
    },
    methods: {
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort'
        }),
        ...mapActions({
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts: 'post/fetchPosts'
        }),
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true;
        },
        // changePage(pageNumber) {
        //     this.page = pageNumber;
        // },

    },
    mounted() {
        this.fetchPosts();
    },
    computed: {
        ...mapState({
            posts: state => state.post.posts,
            isPostsLoading: state => state.post.isPostsLoading,
            selectedSort: state => state.post.selectedSort,
            searchQuery: state => state.post.searchQuery,
            sortOptions: state => state.post.sortOptions,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
        }),
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
        })
    },
    watch: {
    },
}
</script>

<style>
.app_btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}
.page_wrapper {
    display: flex;
    margin-top: 15px;
    cursor: pointer;
}
.page {
    border: 1px solid black;
    padding: 10px;
}

.current-page {
    border: 2px solid teal;
}

.observer {
    height: 30px;
    background: green;
}

</style>