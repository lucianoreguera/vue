<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link 
                class="nav-link active" 
                aria-current="page" 
                to="/">
                <span data-feather="home"></span>
                Dashboard
              </router-link>
            </li>
            <li class="nav-item">
              <router-link 
                class="nav-link" 
                to="/orders"
              >
                <span data-feather="file"></span>
                Orders
              </router-link>
            </li>
            <li class="nav-item">
              <router-link 
                class="nav-link" 
                to="/products"
              >
                <span data-feather="shopping-cart"></span>
                Products
              </router-link>
            </li>
            <li class="nav-item">
              <router-link 
                class="nav-link" 
                to="/customers"
              >
                <span data-feather="users"></span>
                Customers
              </router-link>
            </li>
            <li class="nav-item">
              <router-link 
                class="nav-link" 
                to="/reports"
              >
                <span data-feather="bar-chart-2"></span>
                Reports
              </router-link>
            </li>
            <li class="nav-item">
              <router-link 
                class="nav-link" 
                to="/integrations"
              >
                <span data-feather="layers"></span>
                Integrations
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  /* rtl:raw:
  right: 0;
  */
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #727272;
}

.sidebar .nav-link.active {
  color: #2470dc;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}
</style>