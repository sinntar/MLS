import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

const BreadcrumbMLSDivider = () => (
  <Breadcrumb>
    <Breadcrumb.Section  href="/" >MLS</Breadcrumb.Section>
    <Breadcrumb.Divider>/</Breadcrumb.Divider>
    <Breadcrumb.Section  href="/" >Contracts</Breadcrumb.Section>
    <Breadcrumb.Divider>/</Breadcrumb.Divider>
    <Breadcrumb.Section active>Listings</Breadcrumb.Section>
  </Breadcrumb>
)

export default BreadcrumbMLSDivider
