<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
    <div class="d-flex justify-content-between full-width" style="
         width:  100%;
         ">
        <ul class="navbar-nav">
            <li class="nav-item"><a href="/portfolio" class="nav-link">Portfolio</a></li>
            <li class="nav-item router-link-exact-active active"><a href="/stocks" class="nav-link">Stocks</a></li>
        </ul>
        <ul class="navbar-nav navbar-right">
            <li class="nav-item dropdown"><a href="#" class="nav-link">End Day </a></li>
            <li class="nav-item dropdown"><a href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">
                    Save &amp; Load 
                </a>
                <div aria-labelledby="navbarDropdown" class="dropdown-menu"><a href="#" class="dropdown-item">Save Data</a> <a href="#" class="dropdown-item">Load Data</a></div>
            </li>
        </ul>
    </div>
</div>
</nav>
</template>

<script>
export default {};
</script>