<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/' }"
      >
        <span>
          Social GraphQL
        </span>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
