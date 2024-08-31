
function Layout() {
  return (
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <a href="index.html" className="logo d-flex align-items-center w-auto">
                    <h1 className="d-none d-lg-block fw-bold titulo">InnovaErp</h1>
                </a>
              </div>

              <div className="card mb-3 border-0">

                <div className="card-body login-card">

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4 fw-bold">Bienvenido</h5>
                    <p className="text-center small">Introduzca su nombre de usuario y contraseña para iniciar sesión</p>
                  </div>

                  <form className="row g-3 needs-validation" noValidate>

                    <div className="col-12">
                      <label htmlFor="yourUsername" className="form-label">Nombre de Usuario</label>
                      <div className="input-group has-validation input__username">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" name="username"className="form-control input__username"id="yourUsername"required />
                        <div className="invalid-feedback">Por favor, introduzca su nombre de usuario.</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="yourPassword" className="form-label">Contraseña</label>
                      <input type="password" name="password" className="form-control" id="yourPassword" required />
                      <div className="invalid-feedback">Por favor, introduzca su contraseña!</div>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                        <label className="form-check-label" htmlFor="rememberMe">Recuerdame</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary fs-4 fw-bold w-100  " type="submit">Entrar</button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">No tienes Cuenta <a href="pages-register.html">Crea una cuenta </a></p>
                    </div>
                  </form>

                </div>
              </div>

              <div className="credits">
                
                Creado por <a href="#">Innova</a>
              </div>

            </div>
          </div>
        </div>

      </section>

    </div>
  );
}

export default Layout;
