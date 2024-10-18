import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="footer-top primary-border-bottom pt-110 pb-75 mb-40">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3  col-md-4  col-sm-6 col-6">
                <div className="footer-widget f-info pb-30">
                  <h6 className="text-capitalize text-white mb-22">About</h6>
                  <ul>
                    <li>
                      <Link href="about" className="d-inline-block mb-2">
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link href="about" className="d-inline-block mb-2">
                        Company
                      </Link>
                    </li>
                    <li>
                      <Link href="about" className="d-inline-block mb-2">
                        Team Members
                      </Link>
                    </li>
                    <li>
                      <Link href="about" className="d-inline-block mb-2">
                        Offers
                      </Link>
                    </li>
                    <li>
                      <Link href="about" className="d-inline-block mb-2">
                        Help Guide
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /col */}
              <div className="col-xl-3 col-lg-3  col-md-4  col-sm-6 col-6">
                <div className="footer-widget f-info pb-30">
                  <h6 className="text-capitalize text-white mb-22">Service</h6>
                  <ul>
                    <li>
                      <Link href="about" className="d-inline-block mb-2">
                        Hotel Booking
                      </Link>
                    </li>
                    <li>
                      <Link href="about" className="d-inline-block mb-2">
                        Online Ticket
                      </Link>
                    </li>
                    <li>
                      <Link href="about" className="d-inline-block mb-2">
                        Travel Agent
                      </Link>
                    </li>
                    <li>
                      <Link href="about" className="d-inline-block mb-2">
                        Restaurant
                      </Link>
                    </li>
                    <li>
                      <Link href="about" className="d-inline-block mb-2">
                        Reservation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /col */}
              <div className="col-xl-3 col-lg-2  col-md-4  col-sm-6 col-6">
                <div className="footer-widget f-info pb-30">
                  <h6 className="text-capitalize text-white mb-22">
                    Quick Links
                  </h6>
                  <ul>
                    <li>
                      <Link href="about" className="d-inline-block mb-2">
                        Sales &amp; Service
                      </Link>
                    </li>
                    <li>
                      <Link href="about" className="d-inline-block mb-2">
                        Promotional Offers
                      </Link>
                    </li>
                    <li>
                      <Link href="about" className="d-inline-block mb-2">
                        Online Booking
                      </Link>
                    </li>
                    <li>
                      <Link href="about" className="d-inline-block mb-2">
                        Return Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /col */}
              <div className="col-xl-3 col-lg-4  col-md-12  col-sm-6 col-12">
                <div className="footer-widget f-adress">
                  <h6 className="text-capitalize text-white mb-20">Address</h6>
                  <div className="footer-ad mb-2 d-flex">
                    <span className="text-white pr-25 mt-1">
                      <i className="fa-solid fa-location-dot" />
                    </span>
                    <p className="mb-0">
                      20, Bardeshi, Amin Bazar Savar, Dhaka
                    </p>
                  </div>
                  {/* /phone-call */}
                  <div className="footer-email mb-2 d-flex">
                    <span className="text-white pr-25 mt-1">
                      <i className="fas fa-phone-alt" />
                    </span>
                    <p className="mb-0">
                      <a
                        className="text-color primary-hover d-inline-block"
                        href="#"
                      >
                        +88 01234 5678 (Sales)
                      </a>
                      <a
                        className="text-color primary-hover d-inline-block"
                        href="#"
                      >
                        +88 01234 5679 (Service)
                      </a>
                    </p>
                  </div>
                  {/* /phone-call */}
                  <div className="footer-phone mb-15">
                    <span className="text-white pr-25">
                      <i className="far fa-envelope" />
                    </span>
                    <a className="text-color primary-hover" href="#">
                      thefilipinas@fhc.com
                    </a>
                  </div>
                  {/* /phone-call */}
                </div>
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /footer-top */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row justify-content-lg-between justify-content-center">
              <div className="col-xl-9  col-lg-8  col-md-8  col-sm-12 col-12 pr-0">
                <div className="footer-widget footer-logo pb-35 d-sm-flex align-items-center">
                  <div className="foot-logo mr-30 mb-3 mb-sm-0 text-center text-sm-left">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQ4MCIgem9vbUFuZFBhbj0ibWFnbmlmeSIgdmlld0JveD0iMCAwIDE4NjAgMjk5Ljk5OTk4OCIgaGVpZ2h0PSI0MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZlcnNpb249IjEuMCI+PGRlZnM+PGcvPjxjbGlwUGF0aCBpZD0iMjk1MjgwMjkxNCI+PHBhdGggZD0iTSA0OTAuNTMxMjUgMjkuOTk2MDk0IEwgODI1IDI5Ljk5NjA5NCBMIDgyNSAyNDguOTk2MDk0IEwgNDkwLjUzMTI1IDI0OC45OTYwOTQgWiBNIDQ5MC41MzEyNSAyOS45OTYwOTQgIiBjbGlwLXJ1bGU9Im5vbnplcm8iLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGlwLXBhdGg9InVybCgjMjk1MjgwMjkxNCkiPjxwYXRoIGZpbGw9IiNmYWYzZGQiIGQ9Ik0gNjkwLjAyMzQzOCA1NS4zNDM3NSBMIDcxNS4zNjcxODggMjkuOTk2MDk0IEwgODI0Ljg2NzE4OCAxMzkuNSBMIDcxNS4zNjcxODggMjQ5IEwgNjkwLjAwMzkwNiAyMjMuNjM2NzE5IEwgNjk1IDIxOC42NDA2MjUgTCA3MTUuMzY3MTg4IDIzOS4wMDc4MTIgTCA4MTQuODc1IDEzOS41IEwgNzE1LjM2NzE4OCAzOS45OTIxODggTCA2OTUuMDE5NTMxIDYwLjMzOTg0NCBaIE0gNjcxLjUxMTcxOSAyMTUuMTI4OTA2IEwgNjM3LjY0MDYyNSAyNDkgTCA1MzEuNjcxODc1IDE0My4wMzEyNSBMIDQ5MC41NTg1OTQgMTQzLjAzMTI1IEwgNDkwLjU1ODU5NCAxMzUuOTY4NzUgTCA1MzEuNjcxODc1IDEzNS45Njg3NSBMIDYzNy42NDA2MjUgMjkuOTk2MDk0IEwgNjc2LjQ5NjA5NCA2OC44NjcxODggTCA2NzYuNTA3ODEyIDY4Ljg1NTQ2OSBMIDY4MS41MDM5MDYgNzMuODUxNTYyIEwgNjgxLjQ5NjA5NCA3My44NjMyODEgTCA3NDcuMTI4OTA2IDEzOS41IEwgNjg1LjAwNzgxMiAyMDEuNjI1IFogTSA2MDkuMzk4NDM4IDEzNS45Njg3NSBMIDY3MS41IDczLjg2MzI4MSBMIDYzNy42NDA2MjUgMzkuOTkyMTg4IEwgNTQxLjY2NDA2MiAxMzUuOTY4NzUgWiBNIDY3Ni40OTYwOTQgMjAwLjE0MDYyNSBMIDczNy4xMzY3MTkgMTM5LjUgTCA2NzYuNDk2MDk0IDc4Ljg1OTM3NSBMIDYxNS44NTkzNzUgMTM5LjUgWiBNIDYzNy42NDA2MjUgMjM5LjAwNzgxMiBMIDY3MS41MTE3MTkgMjA1LjEzNjcxOSBMIDYwOS40MTAxNTYgMTQzLjAzMTI1IEwgNTQxLjY3MTg3NSAxNDMuMDMxMjUgWiBNIDYzNy42NDA2MjUgMjM5LjAwNzgxMiAiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjxnIGZpbGw9IiNmYWYzZGQiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODU5LjgyMTcxNywgMjE1LjY3NjQ3NSkiPjxnPjxwYXRoIGQ9Ik0gMTE5LjY4NzUgLTE0My43NjU2MjUgTCAxMjEuMDYyNSAtMTE5LjY4NzUgQyAxMjEuMDYyNSAtMTE4Ljc2OTUzMSAxMjAuNDg4MjgxIC0xMTguMjM0Mzc1IDExOS4zNDM3NSAtMTE4LjA3ODEyNSBDIDExOC4xOTUzMTIgLTExNy45Mjk2ODggMTE3LjQ3MjY1NiAtMTE4LjM5NDUzMSAxMTcuMTcxODc1IC0xMTkuNDY4NzUgQyAxMTYuMDk3NjU2IC0xMjQuNTA3ODEyIDExNC40ODgyODEgLTEyOC40ODQzNzUgMTEyLjM0Mzc1IC0xMzEuMzkwNjI1IEMgMTEwLjIwNzAzMSAtMTM0LjI5Njg3NSAxMDYuOTYwOTM4IC0xMzYuMzk0NTMxIDEwMi42MDkzNzUgLTEzNy42ODc1IEMgOTguMjUzOTA2IC0xMzguOTg4MjgxIDkyLjAyMzQzOCAtMTM5LjY0MDYyNSA4My45MjE4NzUgLTEzOS42NDA2MjUgTCA0Ny45MjE4NzUgLTEzOS42NDA2MjUgQyA0NS4wMTU2MjUgLTEzOS42NDA2MjUgNDIuNTY2NDA2IC0xMzkuMDIzNDM4IDQwLjU3ODEyNSAtMTM3Ljc5Njg3NSBDIDM4LjU5NzY1NiAtMTM2LjU3ODEyNSAzNy42MDkzNzUgLTEzMy45ODQzNzUgMzcuNjA5Mzc1IC0xMzAuMDE1NjI1IEwgMzcuNjA5Mzc1IC03Mi4yMzQzNzUgTCA4My4yMzQzNzUgLTcyLjIzNDM3NSBDIDkwLjQyMTg3NSAtNzIuMjM0Mzc1IDk1LjE2MDE1NiAtNzMuNzk2ODc1IDk3LjQ1MzEyNSAtNzYuOTIxODc1IEMgOTkuNzQyMTg4IC04MC4wNTQ2ODggMTAwLjk2ODc1IC04My4zMDQ2ODggMTAxLjEyNSAtODYuNjcxODc1IEMgMTAxLjI2OTUzMSAtODcuODk4NDM4IDEwMS45NTMxMjUgLTg4LjQ3MjY1NiAxMDMuMTcxODc1IC04OC4zOTA2MjUgQyAxMDQuMzk4NDM4IC04OC4zMTY0MDYgMTA1LjAxNTYyNSAtODcuNjY0MDYyIDEwNS4wMTU2MjUgLTg2LjQzNzUgTCAxMDUuMDE1NjI1IC01Mi45Njg3NSBDIDEwNS4wMTU2MjUgLTUxLjg5NDUzMSAxMDQuMzk4NDM4IC01MS4zMjAzMTIgMTAzLjE3MTg3NSAtNTEuMjUgQyAxMDEuOTUzMTI1IC01MS4xNzU3ODEgMTAxLjI2OTUzMSAtNTEuNjcxODc1IDEwMS4xMjUgLTUyLjczNDM3NSBDIDEwMC45Njg3NSAtNTYuMjUzOTA2IDk5Ljc0MjE4OCAtNTkuNTM5MDYyIDk3LjQ1MzEyNSAtNjIuNTkzNzUgQyA5NS4xNjAxNTYgLTY1LjY1NjI1IDkwLjQyMTg3NSAtNjcuMTg3NSA4My4yMzQzNzUgLTY3LjE4NzUgTCAzNy42MDkzNzUgLTY3LjE4NzUgTCAzNy42MDkzNzUgLTE2LjI4MTI1IEMgMzcuNjA5Mzc1IC0xMi4zMDA3ODEgMzguMjk2ODc1IC05LjYyNSAzOS42NzE4NzUgLTguMjUgQyA0MS4wNDY4NzUgLTYuODc1IDQyLjgzNTkzOCAtNi4wNzAzMTIgNDUuMDQ2ODc1IC01Ljg0Mzc1IEMgNDcuMjY1NjI1IC01LjYxMzI4MSA0OS41OTc2NTYgLTUuMjY5NTMxIDUyLjA0Njg3NSAtNC44MTI1IEMgNTMuMjczNDM4IC00LjY2NDA2MiA1My44NDc2NTYgLTQuMDE1NjI1IDUzLjc2NTYyNSAtMi44NTkzNzUgQyA1My42OTE0MDYgLTEuNzEwOTM4IDUzLjA0Njg3NSAtMS4xNDA2MjUgNTEuODI4MTI1IC0xLjE0MDYyNSBMIDYuNjU2MjUgLTEuMTQwNjI1IEMgNS40MjU3ODEgLTEuMTQwNjI1IDQuODEyNSAtMS43MTA5MzggNC44MTI1IC0yLjg1OTM3NSBDIDQuODEyNSAtNC4wMTU2MjUgNS4zNDc2NTYgLTQuNjY0MDYyIDYuNDIxODc1IC00LjgxMjUgQyA5LjAxNTYyNSAtNS4yNjk1MzEgMTEuMzc4OTA2IC01LjYxMzI4MSAxMy41MTU2MjUgLTUuODQzNzUgQyAxNS42NjAxNTYgLTYuMDcwMzEyIDE3LjQyMTg3NSAtNi44NzUgMTguNzk2ODc1IC04LjI1IEMgMjAuMTcxODc1IC05LjYyNSAyMC44NTkzNzUgLTEyLjMwMDc4MSAyMC44NTkzNzUgLTE2LjI4MTI1IEwgMjAuODU5Mzc1IC0xMjkuNTQ2ODc1IEMgMjAuODU5Mzc1IC0xMzMuNjc5Njg4IDIwLjE3MTg3NSAtMTM2LjQzNzUgMTguNzk2ODc1IC0xMzcuODEyNSBDIDE3LjQyMTg3NSAtMTM5LjE4NzUgMTUuNjYwMTU2IC0xMzkuOTQ1MzEyIDEzLjUxNTYyNSAtMTQwLjA5Mzc1IEMgMTEuMzc4OTA2IC0xNDAuMjUgOS4wMTU2MjUgLTE0MC41NTQ2ODggNi40MjE4NzUgLTE0MS4wMTU2MjUgQyA1LjM0NzY1NiAtMTQxLjMxNjQwNiA0LjgxMjUgLTE0Mi4wMzkwNjIgNC44MTI1IC0xNDMuMTg3NSBDIDQuODEyNSAtMTQ0LjM0Mzc1IDUuNDI1NzgxIC0xNDQuOTIxODc1IDYuNjU2MjUgLTE0NC45MjE4NzUgTCAxMTguMDkzNzUgLTE0NC45MjE4NzUgQyAxMTkuMTU2MjUgLTE0NC45MjE4NzUgMTE5LjY4NzUgLTE0NC41MzUxNTYgMTE5LjY4NzUgLTE0My43NjU2MjUgWiBNIDExOS42ODc1IC0xNDMuNzY1NjI1ICIvPjwvZz48L2c+PC9nPjxnIGZpbGw9IiNmYWYzZGQiIGZpbGwtb3BhY2l0eT0iMSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTg1LjQzOTk0NiwgMjE1LjY3NjQ3NSkiPjxnPjxwYXRoIGQ9Ik0gMTU1LjIzNDM3NSAtNC44MTI1IEMgMTU2LjQ1MzEyNSAtNC42NjQwNjIgMTU3LjAyMzQzOCAtNC4wMTU2MjUgMTU2Ljk1MzEyNSAtMi44NTkzNzUgQyAxNTYuODc4OTA2IC0xLjcxMDkzOCAxNTYuMjI2NTYyIC0xLjE0MDYyNSAxNTUgLTEuMTQwNjI1IEwgMTA5LjgyODEyNSAtMS4xNDA2MjUgQyAxMDguNjA5Mzc1IC0xLjE0MDYyNSAxMDggLTEuNzEwOTM4IDEwOCAtMi44NTkzNzUgQyAxMDggLTQuMDE1NjI1IDEwOC41MzUxNTYgLTQuNjY0MDYyIDEwOS42MDkzNzUgLTQuODEyNSBDIDExMi4yMDMxMjUgLTUuMjY5NTMxIDExNC41NjY0MDYgLTUuNjEzMjgxIDExNi43MDMxMjUgLTUuODQzNzUgQyAxMTguODQ3NjU2IC02LjA3MDMxMiAxMjAuNTcwMzEyIC02Ljg3NSAxMjEuODc1IC04LjI1IEMgMTIzLjE3NTc4MSAtOS42MjUgMTIzLjgyODEyNSAtMTIuMzAwNzgxIDEyMy44MjgxMjUgLTE2LjI4MTI1IEwgMTIzLjgyODEyNSAtNzMuMTQwNjI1IEwgMzcuNjA5Mzc1IC03My4xNDA2MjUgTCAzNy42MDkzNzUgLTE2LjI4MTI1IEMgMzcuNjA5Mzc1IC0xMi4zMDA3ODEgMzguMjUzOTA2IC05LjYyNSAzOS41NDY4NzUgLTguMjUgQyA0MC44NDc2NTYgLTYuODc1IDQyLjYwOTM3NSAtNi4wNzAzMTIgNDQuODI4MTI1IC01Ljg0Mzc1IEMgNDcuMDQ2ODc1IC01LjYxMzI4MSA0OS40NTMxMjUgLTUuMjY5NTMxIDUyLjA0Njg3NSAtNC44MTI1IEMgNTMuMjczNDM4IC00LjY2NDA2MiA1My44NDc2NTYgLTQuMDE1NjI1IDUzLjc2NTYyNSAtMi44NTkzNzUgQyA1My42OTE0MDYgLTEuNzEwOTM4IDUzLjA0Njg3NSAtMS4xNDA2MjUgNTEuODI4MTI1IC0xLjE0MDYyNSBMIDYuNjU2MjUgLTEuMTQwNjI1IEMgNS40MjU3ODEgLTEuMTQwNjI1IDQuODEyNSAtMS43MTA5MzggNC44MTI1IC0yLjg1OTM3NSBDIDQuODEyNSAtNC4wMTU2MjUgNS4zNDc2NTYgLTQuNjY0MDYyIDYuNDIxODc1IC00LjgxMjUgQyA5LjAxNTYyNSAtNS4yNjk1MzEgMTEuMzc4OTA2IC01LjYxMzI4MSAxMy41MTU2MjUgLTUuODQzNzUgQyAxNS42NjAxNTYgLTYuMDcwMzEyIDE3LjM4MjgxMiAtNi44NzUgMTguNjg3NSAtOC4yNSBDIDE5Ljk4ODI4MSAtOS42MjUgMjAuNjQwNjI1IC0xMi4zMDA3ODEgMjAuNjQwNjI1IC0xNi4yODEyNSBMIDIwLjY0MDYyNSAtMTI5LjU0Njg3NSBDIDIwLjY0MDYyNSAtMTMzLjY3OTY4OCAxOS45ODgyODEgLTEzNi40Mzc1IDE4LjY4NzUgLTEzNy44MTI1IEMgMTcuMzgyODEyIC0xMzkuMTg3NSAxNS42NjAxNTYgLTEzOS45NDUzMTIgMTMuNTE1NjI1IC0xNDAuMDkzNzUgQyAxMS4zNzg5MDYgLTE0MC4yNSA5LjAxNTYyNSAtMTQwLjU1NDY4OCA2LjQyMTg3NSAtMTQxLjAxNTYyNSBDIDUuMzQ3NjU2IC0xNDEuMzE2NDA2IDQuODEyNSAtMTQyLjAzOTA2MiA0LjgxMjUgLTE0My4xODc1IEMgNC44MTI1IC0xNDQuMzQzNzUgNS40MjU3ODEgLTE0NC45MjE4NzUgNi42NTYyNSAtMTQ0LjkyMTg3NSBMIDUxLjgyODEyNSAtMTQ0LjkyMTg3NSBDIDUzLjA0Njg3NSAtMTQ0LjkyMTg3NSA1My42OTE0MDYgLTE0NC4zNDM3NSA1My43NjU2MjUgLTE0My4xODc1IEMgNTMuODQ3NjU2IC0xNDIuMDM5MDYyIDUzLjI3MzQzOCAtMTQxLjMxNjQwNiA1Mi4wNDY4NzUgLTE0MS4wMTU2MjUgQyA0OS40NTMxMjUgLTE0MC41NTQ2ODggNDcuMDQ2ODc1IC0xNDAuMjUgNDQuODI4MTI1IC0xNDAuMDkzNzUgQyA0Mi42MDkzNzUgLTEzOS45NDUzMTIgNDAuODQ3NjU2IC0xMzkuMTg3NSAzOS41NDY4NzUgLTEzNy44MTI1IEMgMzguMjUzOTA2IC0xMzYuNDM3NSAzNy42MDkzNzUgLTEzMy42Nzk2ODggMzcuNjA5Mzc1IC0xMjkuNTQ2ODc1IEwgMzcuNjA5Mzc1IC03OC40MjE4NzUgTCAxMjMuODI4MTI1IC03OC40MjE4NzUgTCAxMjMuODI4MTI1IC0xMjkuNTQ2ODc1IEMgMTIzLjgyODEyNSAtMTMzLjY3OTY4OCAxMjMuMTc1NzgxIC0xMzYuNDM3NSAxMjEuODc1IC0xMzcuODEyNSBDIDEyMC41NzAzMTIgLTEzOS4xODc1IDExOC44NDc2NTYgLTEzOS45NDUzMTIgMTE2LjcwMzEyNSAtMTQwLjA5Mzc1IEMgMTE0LjU2NjQwNiAtMTQwLjI1IDExMi4yMDMxMjUgLTE0MC41NTQ2ODggMTA5LjYwOTM3NSAtMTQxLjAxNTYyNSBDIDEwOC41MzUxNTYgLTE0MS4zMTY0MDYgMTA4IC0xNDIuMDM5MDYyIDEwOCAtMTQzLjE4NzUgQyAxMDggLTE0NC4zNDM3NSAxMDguNjA5Mzc1IC0xNDQuOTIxODc1IDEwOS44MjgxMjUgLTE0NC45MjE4NzUgTCAxNTUgLTE0NC45MjE4NzUgQyAxNTYuMjI2NTYyIC0xNDQuOTIxODc1IDE1Ni44Nzg5MDYgLTE0NC4zNDM3NSAxNTYuOTUzMTI1IC0xNDMuMTg3NSBDIDE1Ny4wMjM0MzggLTE0Mi4wMzkwNjIgMTU2LjQ1MzEyNSAtMTQxLjMxNjQwNiAxNTUuMjM0Mzc1IC0xNDEuMDE1NjI1IEMgMTUyLjY0MDYyNSAtMTQwLjU1NDY4OCAxNTAuMjM0Mzc1IC0xNDAuMjUgMTQ4LjAxNTYyNSAtMTQwLjA5Mzc1IEMgMTQ1Ljc5Njg3NSAtMTM5Ljk0NTMxMiAxNDQuMDM1MTU2IC0xMzkuMTg3NSAxNDIuNzM0Mzc1IC0xMzcuODEyNSBDIDE0MS40Mjk2ODggLTEzNi40Mzc1IDE0MC43ODEyNSAtMTMzLjY3OTY4OCAxNDAuNzgxMjUgLTEyOS41NDY4NzUgTCAxNDAuNzgxMjUgLTE2LjI4MTI1IEMgMTQwLjc4MTI1IC0xMi4zMDA3ODEgMTQxLjQyOTY4OCAtOS42MjUgMTQyLjczNDM3NSAtOC4yNSBDIDE0NC4wMzUxNTYgLTYuODc1IDE0NS43OTY4NzUgLTYuMDcwMzEyIDE0OC4wMTU2MjUgLTUuODQzNzUgQyAxNTAuMjM0Mzc1IC01LjYxMzI4MSAxNTIuNjQwNjI1IC01LjI2OTUzMSAxNTUuMjM0Mzc1IC00LjgxMjUgWiBNIDE1NS4yMzQzNzUgLTQuODEyNSAiLz48L2c+PC9nPjwvZz48ZyBmaWxsPSIjZmFmM2RkIiBmaWxsLW9wYWNpdHk9IjEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExNDcuMDQ3NDQyLCAyMTUuNjc2NDc1KSI+PGc+PHBhdGggZD0iTSAxMzUuMjgxMjUgLTI4LjIwMzEyNSBDIDEzNi42NTYyNSAtMzAuMTkxNDA2IDEzOC4xODc1IC0zMS4xODc1IDEzOS44NzUgLTMxLjE4NzUgQyAxNDEuNTUwNzgxIC0zMS4xODc1IDE0Mi44MTI1IC0zMC40MjE4NzUgMTQzLjY1NjI1IC0yOC44OTA2MjUgQyAxNDQuNSAtMjcuMzU5Mzc1IDE0NC4wNzgxMjUgLTI1LjY3NTc4MSAxNDIuMzkwNjI1IC0yMy44NDM3NSBDIDEzNS44MTY0MDYgLTE2LjE5NTMxMiAxMjcuODY3MTg4IC05Ljk2ODc1IDExOC41NDY4NzUgLTUuMTU2MjUgQyAxMDkuMjIyNjU2IC0wLjM0Mzc1IDk3LjYwMTU2MiAyLjA2MjUgODMuNjg3NSAyLjA2MjUgQyA2OC43MDcwMzEgMi4wNjI1IDU1LjgyODEyNSAtMC42NDg0MzggNDUuMDQ2ODc1IC02LjA3ODEyNSBDIDM0LjI3MzQzOCAtMTEuNTAzOTA2IDI1LjY3NTc4MSAtMTguNjg3NSAxOS4yNSAtMjcuNjI1IEMgMTIuODMyMDMxIC0zNi41NzAzMTIgOC41NTA3ODEgLTQ2LjM5NDUzMSA2LjQwNjI1IC01Ny4wOTM3NSBDIDQuMjY5NTMxIC02Ny43ODkwNjIgNC4yNjk1MzEgLTc4LjQ1MzEyNSA2LjQwNjI1IC04OS4wNzgxMjUgQyA4LjU1MDc4MSAtOTkuNzAzMTI1IDEyLjgzMjAzMSAtMTA5LjQ4NDM3NSAxOS4yNSAtMTE4LjQyMTg3NSBDIDI1LjY3NTc4MSAtMTI3LjM2NzE4OCAzNC4yNzM0MzggLTEzNC41NTQ2ODggNDUuMDQ2ODc1IC0xMzkuOTg0Mzc1IEMgNTUuODI4MTI1IC0xNDUuNDEwMTU2IDY4LjcwNzAzMSAtMTQ4LjEyNSA4My42ODc1IC0xNDguMTI1IEMgODkuNSAtMTQ4LjEyNSA5NS4wMDM5MDYgLTE0Ny42NjQwNjIgMTAwLjIwMzEyNSAtMTQ2Ljc1IEMgMTA1LjM5ODQzOCAtMTQ1LjgzMjAzMSAxMTAuMjE4NzUgLTE0NC41MzUxNTYgMTE0LjY1NjI1IC0xNDIuODU5Mzc1IEMgMTE2Ljc4OTA2MiAtMTQyLjM5ODQzOCAxMTkuNDI1NzgxIC0xNDEuMzYzMjgxIDEyMi41NjI1IC0xMzkuNzUgQyAxMjUuNjk1MzEyIC0xMzguMTQ0NTMxIDEyOC43MTA5MzggLTEzNi4zNDc2NTYgMTMxLjYwOTM3NSAtMTM0LjM1OTM3NSBDIDEzNC41MTU2MjUgLTEzMi4zNzg5MDYgMTM2LjY1NjI1IC0xMzAuNTQ2ODc1IDEzOC4wMzEyNSAtMTI4Ljg1OTM3NSBDIDE0MC40NzY1NjIgLTEyNS45NjA5MzggMTQxLjYyNSAtMTIzLjIxMDkzOCAxNDEuNDY4NzUgLTEyMC42MDkzNzUgQyAxNDEuMzIwMzEyIC0xMTguMDE1NjI1IDE0MC40NDUzMTIgLTExNS45MTAxNTYgMTM4Ljg0Mzc1IC0xMTQuMjk2ODc1IEMgMTM3LjIzODI4MSAtMTEyLjY5MTQwNiAxMzUuMjg5MDYyIC0xMTEuODkwNjI1IDEzMyAtMTExLjg5MDYyNSBDIDEzMS40Njg3NSAtMTExLjg5MDYyNSAxMjkuODIwMzEyIC0xMTIuMzgyODEyIDEyOC4wNjI1IC0xMTMuMzc1IEMgMTI2LjMwMDc4MSAtMTE0LjM3NSAxMjQuODEyNSAtMTE2LjA5NzY1NiAxMjMuNTkzNzUgLTExOC41NDY4NzUgQyAxMjIuNjc1NzgxIC0xMjAuNTM1MTU2IDEyMS45ODgyODEgLTEyMi42NzU3ODEgMTIxLjUzMTI1IC0xMjQuOTY4NzUgQyAxMjEuMDcwMzEyIC0xMjcuMjU3ODEyIDEyMCAtMTI5LjU4NTkzOCAxMTguMzEyNSAtMTMxLjk1MzEyNSBDIDExNi42MzI4MTIgLTEzNC4zMjgxMjUgMTEzLjI3MzQzOCAtMTM2LjY2MDE1NiAxMDguMjM0Mzc1IC0xMzguOTUzMTI1IEMgMTA0LjU1NDY4OCAtMTQwLjE3MTg3NSAxMDAuNSAtMTQxLjAwNzgxMiA5Ni4wNjI1IC0xNDEuNDY4NzUgQyA5MS42MzI4MTIgLTE0MS45Mzc1IDg3LjUwNzgxMiAtMTQyLjE3MTg3NSA4My42ODc1IC0xNDIuMTcxODc1IEMgNzIuNTMxMjUgLTE0Mi4xNzE4NzUgNjIuODk4NDM4IC0xMzkuNjg3NSA1NC43OTY4NzUgLTEzNC43MTg3NSBDIDQ2LjcwMzEyNSAtMTI5Ljc1IDQwLjIwNzAzMSAtMTIzLjEzMjgxMiAzNS4zMTI1IC0xMTQuODc1IEMgMzAuNDE0MDYyIC0xMDYuNjI1IDI3LjEyODkwNiAtOTcuNTY2NDA2IDI1LjQ1MzEyNSAtODcuNzAzMTI1IEMgMjMuNzczNDM4IC03Ny44NDc2NTYgMjMuNzM4MjgxIC02Ny45ODgyODEgMjUuMzQzNzUgLTU4LjEyNSBDIDI2Ljk0NTMxMiAtNDguMjY5NTMxIDMwLjE1NjI1IC0zOS4yMTA5MzggMzQuOTY4NzUgLTMwLjk1MzEyNSBDIDM5Ljc4MTI1IC0yMi43MDMxMjUgNDYuMjM4MjgxIC0xNi4wOTM3NSA1NC4zNDM3NSAtMTEuMTI1IEMgNjIuNDQ1MzEyIC02LjE1NjI1IDcyLjIyNjU2MiAtMy42NzE4NzUgODMuNjg3NSAtMy42NzE4NzUgQyA5NC4yMzgyODEgLTMuNjcxODc1IDEwMi44MDA3ODEgLTQuODkwNjI1IDEwOS4zNzUgLTcuMzI4MTI1IEMgMTE1Ljk0NTMxMiAtOS43NzM0MzggMTIxLjIxODc1IC0xMi44NjcxODggMTI1LjE4NzUgLTE2LjYwOTM3NSBDIDEyOS4xNjQwNjIgLTIwLjM1OTM3NSAxMzIuNTMxMjUgLTI0LjIyMjY1NiAxMzUuMjgxMjUgLTI4LjIwMzEyNSBaIE0gMTM1LjI4MTI1IC0yOC4yMDMxMjUgIi8+PC9nPjwvZz48L2c+PC9zdmc+" alt="Rovero" width="248" height="40" />
                  </div>
                  <div className="copyright-text">
                    <p className="mb-0">
                      All rights reserved
                      <a href="#" className="c-theme primary-color f-600">
                        {" "}
                        FHC (CPE104L-4 B2 1Q2425 G6)
                      </a>
                      © {new Date().getFullYear()}
                    </p>
                  </div>
                </div>
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /footer-bottom */}
      </div>
    </footer>
  );
};
export default Footer;
