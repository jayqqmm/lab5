<template>
<div id="app">
  <div class="header">
    <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
        <a class="pure-menu-heading" href="">Food Factory</a>

        <ul class="pure-menu-list">
            <li class="pure-menu-item pure-menu-selected">
               <router-link to="/" class="pure-menu-link">Home</router-link>
            </li>
            <li class="pure-menu-item">
                <router-link to="/mypage" class="pure-menu-link">My Menu</router-link>
            </li>
            <li class="pure-menu-item">
                <div v-if="user"> 
                <a href="#" @click="logout">{{user.name}} <i class="fas fa-sign-out-alt"></i></a>
                </div>
                <div v-else>
                <router-link to="/register" class="pure-menu-link">Sign Up</router-link>
                </div>
            </li>
        </ul>
    </div>
</div>

<div class="splash-container">
    <div class="splash">
        <h1 class="splash-head">It's the dream</h1>
        <p class="splash-subhead">
            Don't know what you want to eat!!! <br> No Problem, just click the buttons.
        </p>
        <div v-if="user">
        <a class="pure-button pure-button-primary">Enjoy your food</a>
        </div>
        <div v-else>
        <p>
            <router-link to="/login" class="pure-button pure-button-primary">Login to your account</router-link>
        </p>
        </div>
    </div>
</div>
  <div class="content-wrapper">
    <div class="content">
    <router-view/>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'layout',
   computed: {
  user() {
    return this.$store.state.user;
  },
 },
   methods: {
    async logout() {
      try {
        this.error = await this.$store.dispatch("logout");
      } catch (error) {
        console.log(error);
      }
    },
}
}
</script>

<style>
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

/*
 * -- BASE STYLES --
 * Most of these are inherited from Base, but I want to change a few.
 */
body {
    line-height: 1.7em;
    color: #7f8c8d;
    font-size: 13px;
}

h1,
h2,
h3,
h4,
h5,
h6,
label {
    color: #34495e;
}

.pure-img-responsive {
    max-width: 100%;
    height: auto;
}

/*
 * -- LAYOUT STYLES --
 * These are some useful classes which I will need
 */
.l-box {
    padding: 1em;
}

.l-box-lrg {
    padding: 2em;
    border-bottom: 1px solid rgba(0,0,0,0.1);
}

.is-center {
    text-align: center;
}



/*
 * -- PURE FORM STYLES --
 * Style the form inputs and labels
 */
.pure-form label {
    margin: 1em 0 0;
    font-weight: bold;
    font-size: 100%;
}

.pure-form input[type] {
    border: 2px solid #ddd;
    box-shadow: none;
    font-size: 100%;
    width: 100%;
    margin-bottom: 1em;
}

/*
 * -- PURE BUTTON STYLES --
 * I want my pure-button elements to look a little different
 */
.pure-button {
    background-color: #1f8dd6;
    color: white;
    padding: 0.5em 2em;
    border-radius: 5px;
}

a.pure-button-primary {
    background: white;
    color: #1f8dd6;
    border-radius: 5px;
    font-size: 120%;
}


/*
 * -- MENU STYLES --
 * I want to customize how my .pure-menu looks at the top of the page
 */

.home-menu {
    padding: 0.5em;
    text-align: center;
    box-shadow: 0 1px 1px rgba(0,0,0, 0.10);
}
.home-menu {
    background: #2d3e50;
}
.pure-menu.pure-menu-fixed {
    /* Fixed menus normally have a border at the bottom. */
    border-bottom: none;
    /* I need a higher z-index here because of the scroll-over effect. */
    z-index: 4;
}

.home-menu .pure-menu-heading {
    color: white;
    font-weight: 400;
    font-size: 120%;
}

.home-menu .pure-menu-selected a {
    color: white;
}

.home-menu a {
    color: #6FBEF3;
}
.home-menu li a:hover,
.home-menu li a:focus {
    background: none;
    border: none;
    color: #AECFE5;
}


/*
 * -- SPLASH STYLES --
 * This is the blue top section that appears on the page.
 */

.splash-container {
    background: #1f8dd6;
    z-index: 1;
    overflow: hidden;
    /* The following styles are required for the "scroll-over" effect */
    width: 100%;
    height: 88%;
    top: 0;
    left: 0;
    position: fixed !important;
}

.splash {
    /* absolute center .splash within .splash-container */
    width: 80%;
    height: 50%;
    margin: auto;
    position: absolute;
    top: 100px; left: 0; bottom: 0; right: 0;
    text-align: center;
    text-transform: uppercase;
}

/* This is the main heading that appears on the blue section */
.splash-head {
    font-size: 20px;
    font-weight: bold;
    color: white;
    border: 3px solid white;
    padding: 1em 1.6em;
    font-weight: 100;
    border-radius: 5px;
    line-height: 1em;
}

/* This is the subheading that appears on the blue section */
.splash-subhead {
    color: white;
    letter-spacing: 0.05em;
    opacity: 0.8;
}

/*
 * -- CONTENT STYLES --
 * This represents the content area (everything below the blue section)
 */
.content-wrapper {
    /* These styles are required for the "scroll-over" effect */
    position: absolute;
    top: 87%;
    width: 100%;
    min-height: 12%;
    z-index: 2;
    background: white;

}

/* We want to give the content area some more padding */
.content {
    padding: 1em 1em 3em;
}

/* This is the class used for the main content headers (<h2>) */
.content-head {
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 2em 0 1em;
}

/* This is a modifier class used when the content-head is inside a ribbon */
.content-head-ribbon {
    color: white;
}

/* This is the class used for the content sub-headers (<h3>) */
.content-subhead {
    color: #1f8dd6;
}
    .content-subhead i {
        margin-right: 7px;
    }

/* This is the class used for the dark-background areas. */
.ribbon {
    background: #2d3e50;
    color: #aaa;
}

/* This is the class used for the footer */
.footer {
    background: #111;
    position: fixed;
    bottom: 0;
    width: 100%;
}

/*
 * -- TABLET (AND UP) MEDIA QUERIES --
 * On tablets and other medium-sized devices, we want to customize some
 * of the mobile styles.
 */
@media (min-width: 48em) {

    /* We increase the body font size */
    body {
        font-size: 16px;
    }

    /* We can align the menu header to the left, but float the
    menu items to the right. */
    .home-menu {
        text-align: left;
    }
        .home-menu ul {
            float: right;
        }

    /* We increase the height of the splash-container */
/*    .splash-container {
        height: 500px;
    }*/

    /* We decrease the width of the .splash, since we have more width
    to work with */
    .splash {
        width: 50%;
        height: 50%;
    }

    .splash-head {
        font-size: 250%;
    }


    /* We remove the border-separator assigned to .l-box-lrg */
    .l-box-lrg {
        border: none;
    }

}

/*
 * -- DESKTOP (AND UP) MEDIA QUERIES --
 * On desktops and other large devices, we want to over-ride some
 * of the mobile and tablet styles.
 */
@media (min-width: 78em) {
    /* We increase the header font size even more */
    .splash-head {
        font-size: 300%;
    }
}
</style>
