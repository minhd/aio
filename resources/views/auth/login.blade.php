@extends('layouts.master')

@section('content')
<div class="columns">
    <div class="box column is-half-desktop is-offset-one-quarter">
        <form class="form-horizontal" role="form" method="POST" action="{{ route('login') }}">
            {{ csrf_field() }}
            <p class="control has-icon">
                <input class="input {{ isValidationFail($errors, 'email') }}" type="email" placeholder="Email" name="email" value="{{ old('email') }}" required autofocus>
                <span class="icon is-small">
                    <i class="fa fa-envelope"></i>
                </span>
                @if ($errors->has('email'))
                    <span class="help is-danger">
                        {{ $errors->first('email') }}
                    </span>
                @endif
            </p>
            <p class="control has-icon">
                <input class="input {{ isValidationFail($errors, 'password') }}" type="password" placeholder="Password" name="password" required autofocus>
                <span class="icon is-small">
                    <i class="fa fa-lock"></i>
                </span>
                @if ($errors->has('password'))
                    <span class="help is-danger">
                        {{ $errors->first('password') }}
                    </span>
                @endif
            </p>
            <p class="control">
                <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me
            </p>
            <p class="control">
                <button class="button is-success">
                    Login
                </button>
                <a class="button is-white" href="{{ route('password.request') }}">
                    Forgot Your Password?
                </a>
            </p>
        </form>
    </div>
</div>
@endsection

@section('content2')
<div class="container">
    <div class="columns">
        <div class="column">
            <div class="panel panel-default">
                <div class="panel-heading">Login</div>
                <div class="panel-body">
                    <form class="form-horizontal" role="form" method="POST" action="{{ route('login') }}">
                        {{ csrf_field() }}


                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label for="password" class="col-md-4 control-label">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>

                                <a class="btn btn-link" href="{{ route('password.request') }}">
                                    Forgot Your Password?
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
