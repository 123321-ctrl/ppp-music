const Individuation = () => import('../views/individuation/Individuation.vue');
const AllMusicList = () => import('../views/music-list/all-music-list')
const MusicListDetail = () => import('../views/MusicListDetail/MusicListDetail.vue')
const RankList = () => import('../views/rank-list/rank-list')
const ArtistList = () => import('../views/artist-list/artist-list')
const MV = () => import('../views/mv/mv')
const NewSongs = () => import('../views/new-songs/new-songs')
const ArtistDetail = () => import('../views/ArtistDetail/ArtistDetail')
const MvDetail = () => import('../views/mv/mvDetail')
const SearchDetail = () => import('../views/SearchDetail/SearchDetail')
const SearchSongs = () => import('../views/SearchDetail/Childs/SearchSongs')

const routes = [
    {
        path: '/',
        redirect: '/individuation'
    },
    {
        path: '/individuation',
        component: Individuation
    },
    {
        path: '/allmusiclist',
        component: AllMusicList
    }, {
        path: '/musiclistdetail/:id/:time',
        component: MusicListDetail
    },
    {
        path: '/ranklist',
        component: RankList
    },
    {
        path: '/artist-list',
        component: ArtistList
    },
    {
        path: '/mv',
        component: MV
    },
    {
        path: '/new-songs',
        component: NewSongs
    },
    {
        path: '/artist-detail',
        component: ArtistDetail
    },
    {
        path: '/mv-detail/:id',
        component: MvDetail
    },
    {
        path:'/search-detail/:keywords',
        component:SearchDetail,
        children:[
            {
                path: '/',
                redirect: 'songs'
            },
            {
                path: 'songs',
                component: SearchSongs,
            },
        ]
    }
]
export default routes