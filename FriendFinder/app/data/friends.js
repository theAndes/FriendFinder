// ===============================================================================
// DATA
// Below data will hold all of the friends
// ===============================================================================
const friends = [
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
        "scores": [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    },
    {
        "name": "Jacob Deming",
        "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
        "scores": [
            "4",
            "2",
            "5",
            "1",
            "3",
            "2",
            "2",
            "1",
            "3",
            "2"
        ]
    },
    {
        "name": "Jeremiah Scanlon",
        "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
        "scores": [
            "5",
            "2",
            "2",
            "2",
            "4",
            "1",
            "3",
            "2",
            "5",
            "5"
        ]
    },
    {
        "name": "Louis T. Delia",
        "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
        "scores": [
            "3",
            "3",
            "4",
            "2",
            "2",
            "1",
            "3",
            "2",
            "2",
            "3"
        ]
    },
    {
        "name": "Lou Ritter",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
        "scores": [
            "4",
            "3",
            "4",
            "1",
            "5",
            "2",
            "5",
            "3",
            "1",
            "4"
        ]
    },
    {
        "name": "Jordan Biason",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
        "scores": [
            "4",
            "4",
            "2",
            "3",
            "2",
            "2",
            "3",
            "2",
            "4",
            "5"
        ]
    },
    {
        "name": "abc",
        "photo": "https://i.ytimg.com/vi/TLPF07YMME0/maxresdefault.jpg",
        "scores": [
            "5",
            "1",
            "1",
            "1",
            "5",
            "1",
            "5",
            "1",
            "1",
            "5"
        ]
    },
    {
        "name": "Pugsly McBones",
        "photo": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1529927066849-79b791a69825%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fsearch%2Fphotos%2Fpug&docid=12B497mOd2tgcM&tbnid=_GuHlBp0Mg9ShM%3A&vet=10ahUKEwjklfDl8YbhAhWl1lkKHXbHAd4QMwg7KAAwAA..i&w=1000&h=668&bih=744&biw=767&q=pug%20pictures&ved=0ahUKEwjklfDl8YbhAhWl1lkKHXbHAd4QMwg7KAAwAA&iact=mrc&uact=8",
        "scores": [
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3"
        ]
    },
    {
        "name": "sdaes",
        "photo": "efre",
        "scores": [
            "3",
            "3",
            "3",
            "2",
            "3",
            "4",
            "2",
            "3",
            "3",
            "3"
        ]
    },
    {
        "name": "gstar",
        "photo": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.theatlantic.com%2Fassets%2Fmedia%2Fimg%2Fmt%2F2017%2F10%2FPict1_Ursinia_calendulifolia%2Flead_720_405.jpg%3Fmod%3D1533691909&imgrefurl=https%3A%2F%2Fwww.theatlantic.com%2Fscience%2Farchive%2F2017%2F10%2Fthe-secret-blue-halo-of-flowers%2F543228%2F&docid=DC52CaPxjGNUtM&tbnid=cp7eeYsm6IfORM%3A&vet=10ahUKEwiE4-rskY3hAhU9JTQIHe5jDBkQMwhsKAEwAQ..i&w=720&h=405&bih=650&biw=1037&q=flower&ved=0ahUKEwiE4-rskY3hAhU9JTQIHe5jDBkQMwhsKAEwAQ&iact=mrc&uact=8",
        "scores": [
            "3",
            "5",
            "3",
            "1",
            "3",
            "1",
            "4",
            "3",
            "1",
            "5"
        ]
    },
    {
        "name": "Lauren Bullen",
        "photo": "https://lh3.googleusercontent.com/-yHp4YMrKCkc/W5Cg6p8lvSI/AAAAAAAAAB4/o6bQR4iVNoM7aYDhHnjEU8mMwFhKISnsACEwYBhgL/w278-h280-p/35364059_10156186808686677_5940572011028807680_n.jpg",
        "scores": [
            "3",
            "2",
            "1",
            "2",
            "5",
            "2",
            "5",
            "2",
            "2",
            "3"
        ]
    },
    {
        "name": "Jeff Dunn",
        "photo": "https://cdn.searchenginejournal.com/wp-content/uploads/2017/12/martinibuster_400x400-200x200.jpg",
        "scores": [
            "3",
            "4",
            "3",
            "2",
            "5",
            "2",
            "1",
            "5",
            "4",
            "3"
        ]
    },
    {
        "name": "Chandni Patel",
        "photo": "efre",
        "scores": [
            "1",
            "3",
            "2",
            "2",
            "2",
            "2",
            "1",
            "3",
            "2",
            "1"
        ]
    },
    {
        "name": "asdfasfa",
        "photo": "asdfasdfsdfsdfsd",
        "scores": [
            "3",
            "2",
            "4",
            "5",
            "2",
            "4",
            "3",
            "2",
            "3",
            "3"
        ]
    },
    {
        "name": "hawi",
        "photo": "kdsflasdjfdkaf",
        "scores": [
            "3",
            "2",
            "4",
            "5",
            "2",
            "4",
            "3",
            "2",
            "3",
            "3"
        ]
    },
    {
        "name": "Jose",
        "photo": "oweji;awoie",
        "scores": [
            "5",
            "3",
            "3",
            "3",
            "5",
            "1",
            "4",
            "1",
            "4",
            "2"
        ]
    },
    {
        "name": "j",
        "photo": "sbv",
        "scores": [
            "2",
            "1",
            "2",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        "name": "Chandni Patel",
        "photo": "efre",
        "scores": [
            "1",
            "3",
            "2",
            "2",
            "2",
            "2",
            "1",
            "3",
            "2",
            "1"
        ]
    },
    {
        "name": "Tom",
        "photo": "https://pbs.twimg.com/profile_images/1042322703854829568/XVDXUNVJ_400x400.jpg",
        "scores": [
            "4",
            "3",
            "3",
            "4",
            "4",
            "2",
            "4",
            "2",
            "4",
            "2"
        ]
    },
    {
        "name": "Tom",
        "photo": "https://pbs.twimg.com/profile_images/1042322703854829568/XVDXUNVJ_400x400.jpg",
        "scores": [
            "4",
            "3",
            "3",
            "4",
            "4",
            "2",
            "4",
            "2",
            "4",
            "2"
        ]
    },
    {
        "name": "kbb",
        "photo": "jsoigjknewojriop",
        "scores": [
            "3",
            "5",
            "2",
            "4",
            "4",
            "1",
            "3",
            "2",
            "2",
            "4"
        ]
    }
]
module.exports = friends;