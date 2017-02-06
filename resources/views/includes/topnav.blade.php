<nav class="nav has-shadow">
    <div class="container">
        @if(!Auth::guest())
        <div class="nav-left">
            <!--a class="nav-item">
                <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
            </a-->
            <topnav custom="is-hidden-mobile"></topnav>
        </div>
        @endif
        <span class="nav-toggle" id="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
        <div class="nav-right nav-menu" id="nav-menu">

            <router-link to="/" exact class="nav-item is-tab is-hidden-tablet">Home</router-link>
            <router-link to="/quotes" exact class="nav-item is-tab is-hidden-tablet">Quotes</router-link>
            <router-link to="/about" exact class="nav-item is-tab is-hidden-tablet">About</router-link>

            @if (Auth::guest())
                <a class="nav-item is-tab {{ isActiveRoute('login') }}" href="{{ route('login') }}">Login</a>
                <a class="nav-item is-tab {{ isActiveRoute('register') }}" href="{{ route('register') }}">Register</a>
            @else
                <a class="nav-item is-tab" href="{{ route('logout') }}"
                   onclick="event.preventDefault();document.getElementById('logout-form').submit();"> Logout
                </a>

                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    {{ csrf_field() }}
                </form>
            @endif


        </div>
    </div>
</nav>