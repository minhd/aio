@extends("layout.master")

@section("content")
    <div id="app" class="container">

        <div class="columns">
            <div class="column is-one-quarter">
                <SideNav></SideNav>
            </div>

            <div class="column box">
                <router-view></router-view>
            </div>
        </div>

        @yield("content")
    </div>
@endsection