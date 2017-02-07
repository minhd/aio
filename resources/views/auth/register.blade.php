@extends('layouts.master')

@section('content')
    <div class="columns">
        <div class="box column is-half-desktop is-offset-one-quarter">
            <div class="content">
                <p>Login to access your All In One application</p>
            </div>

            <form class="form-horizontal" role="form" method="POST"
                  action="{{ route('register') }}">
                {{ csrf_field() }}

                <p class="control">
                    <input class="input {{ isValidationFail($errors, 'name') }}"
                           type="text" placeholder="Name" name="name"
                           value="{{ old('name') }}">
                    @if ($errors->has('name'))
                        <span class="help is-danger">
                            {{ $errors->first('name') }}
                        </span>
                    @endif
                </p>

                <p class="control">
                    <input class="input {{ isValidationFail($errors, 'email') }}"
                           type='email' placeholder="Email" name="email"
                           value="{{ old('email') }}">
                    @if ($errors->has('email'))
                        <span class="help is-danger">
                            {{ $errors->first('email') }}
                        </span>
                    @endif
                </p>

                <p class="control">
                    <input class="input {{ isValidationFail($errors, 'password') }}"
                           type='password' placeholder="Password" name="password"
                           value="{{ old('password') }}">
                    @if ($errors->has('password'))
                        <span class="help is-danger">
                            {{ $errors->first('password') }}
                        </span>
                    @endif
                </p>

                <p class="control">
                    <input class="input {{ isValidationFail($errors, 'password_confirmation') }}"
                           type='password' placeholder="Password Confirmation" name="password_confirmation"
                           value="{{ old('password_confirmation') }}">
                    @if ($errors->has('password_confirmation'))
                        <span class="help is-danger">
                            {{ $errors->first('password_confirmation') }}
                        </span>
                    @endif
                </p>

                <p class="control">
                    <button class="button is-success">
                        Register
                    </button>
                </p>

            </form>
        </div>
    </div>
@endsection

@section('content2')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Register</div>
                    <div class="panel-body">
                        <form class="form-horizontal" role="form" method="POST"
                              action="{{ route('register') }}">
                            {{ csrf_field() }}

                            <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                                <label for="name"
                                       class="col-md-4 control-label">Name</label>

                                <div class="col-md-6">
                                    <input id="name" type="text"
                                           class="form-control" name="name"
                                           value="{{ old('name') }}" required
                                           autofocus>

                                    @if ($errors->has('name'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                <label for="email"
                                       class="col-md-4 control-label">E-Mail
                                    Address</label>

                                <div class="col-md-6">
                                    <input id="email" type="email"
                                           class="form-control" name="email"
                                           value="{{ old('email') }}" required>

                                    @if ($errors->has('email'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                <label for="password"
                                       class="col-md-4 control-label">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password"
                                           class="form-control" name="password"
                                           required>

                                    @if ($errors->has('password'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="password-confirm"
                                       class="col-md-4 control-label">Confirm
                                    Password</label>

                                <div class="col-md-6">
                                    <input id="password-confirm" type="password"
                                           class="form-control"
                                           name="password_confirmation"
                                           required>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <button type="submit"
                                            class="btn btn-primary">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
