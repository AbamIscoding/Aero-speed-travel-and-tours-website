import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { JsonLd } from '@/components/JsonLd';
import { buildBreadcrumbListSchema } from '@/lib/structured-data';

type Crumb = { label: string; href?: string };

export function PageBreadcrumbs({ items }: { items: readonly Crumb[] }) {
  return (
    <>
      <Breadcrumb className="page-breadcrumbs">
        <BreadcrumbList>
          {items.map((item, index) => (
            <BreadcrumbItem key={item.label}>
              {item.href ? <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink> : <BreadcrumbPage>{item.label}</BreadcrumbPage>}
              {index < items.length - 1 && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <JsonLd data={buildBreadcrumbListSchema(items)} />
    </>
  );
}
