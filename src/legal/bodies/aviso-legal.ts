import {
  getLegalIdentity,
  hasCompleteLegalIdentity,
  type LegalIdentity,
} from "@/lib/legal-identity";

function identityBlock(id: LegalIdentity): string {
  if (hasCompleteLegalIdentity(id)) {
    const registry = id.registry
      ? `<li><strong>Datos registrales:</strong> ${id.registry}</li>`
      : "";
    return `
<ul>
<li><strong>Titular:</strong> ${id.legalName}</li>
<li><strong>NIF/CIF:</strong> ${id.taxId}</li>
<li><strong>Domicilio:</strong> ${id.address}</li>
${registry}
<li><strong>Sitio web:</strong> <a href="${id.siteUrl}">${id.siteUrl}</a></li>
<li><strong>Correo electrónico:</strong> <a href="mailto:${id.email}">${id.email}</a></li>
</ul>`;
  }

  return `
<ul>
<li><strong>Denominación / titular del proyecto:</strong> rulo.digital</li>
<li><strong>Sitio web:</strong> <a href="${id.siteUrl}">${id.siteUrl}</a></li>
<li><strong>Correo electrónico de contacto:</strong> <a href="mailto:${id.email}">${id.email}</a></li>
</ul>
<p><strong>Pendiente de completar:</strong> nombre y apellidos o razón social, NIF/CIF y domicilio a efectos de notificaciones (y, si aplica, datos de Registro Mercantil). Configura <code>NEXT_PUBLIC_LEGAL_NAME</code>, <code>NEXT_PUBLIC_LEGAL_TAX_ID</code> y <code>NEXT_PUBLIC_LEGAL_ADDRESS</code> en el entorno de producción. Hasta entonces, la relación precontractual se formalizará en la documentación que se remita en cada encargo.</p>`;
}

/** Aviso legal (LSSI) — datos identificativos desde env cuando existan. */
export function buildAvisoLegalHtml(): string {
  const id = getLegalIdentity();
  return `
<h2>1. Datos identificativos</h2>
<p>De conformidad con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos del titular del sitio web <strong>rulo.digital</strong>:</p>
${identityBlock(id)}

<h2>2. Objeto del sitio web</h2>
<p>El Sitio tiene por objeto facilitar información sobre los servicios digitales ofrecidos bajo la marca rulo.digital (entre otros, diseño y desarrollo de landings y páginas de captación, optimización orientada a conversión y servicios afines), permitir el contacto con el titular y, en su caso, la solicitud de recursos informativos gratuitos.</p>

<h2>3. Condiciones generales de uso</h2>
<p>El acceso y la navegación por el Sitio suponen la aceptación de las <a href="/terminos">condiciones generales de uso</a> y de la <a href="/privacidad">política de privacidad</a>. El titular podrá modificar el contenido del Sitio sin perjuicio de los derechos adquiridos por los usuarios en relación con servicios contratados.</p>

<h2>4. Propiedad intelectual e industrial</h2>
<p>Los signos distintivos, logotipos, textos, imágenes, diseño y resto de contenidos propios del Sitio están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa y por escrito del titular, salvo las excepciones legalmente previstas.</p>

<h2>5. Responsabilidad</h2>
<p>El titular no se hace responsable de la información contenida en sitios web de terceros a los que se acceda mediante enlaces desde el Sitio, ni del mal uso que se haga de los contenidos publicados en rulo.digital. El usuario utiliza el Sitio bajo su propia responsabilidad.</p>

<h2>6. Ley aplicable</h2>
<p>Las presentes informaciones y el uso del Sitio se rigen por la legislación española.</p>
`;
}
