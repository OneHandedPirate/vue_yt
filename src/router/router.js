import Main from "@/pages/Main.vue";
import {createWebHistory, createRouter} from "vue-router";
import UserPage from "@/pages/UserPage.vue";
import About from "@/pages/About.vue";
import PostIdPage from "@/pages/PostIdPage.vue";
import PostPageWithStore from "@/pages/PostPageWithStore.vue";
import PostPageComposition from "@/pages/PostPageComposition.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: UserPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/composition',
        component: PostPageComposition
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})


export default router