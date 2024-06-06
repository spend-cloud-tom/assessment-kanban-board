<template>
  <div class="grid grid-rows-[auto_1fr] min-h-full gap-2">
    <PageHeader class="empty:hidden">
      <slot name="header" />
    </PageHeader>
    <PageContent>
      <slot />
    </PageContent>
  </div>
</template>
