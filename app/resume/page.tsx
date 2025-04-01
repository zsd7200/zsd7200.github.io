export default function Resume() {
  return (
    <div className="relative w-screen h-screen">
      <object data="/resume.pdf" type="application/pdf" className="w-full h-full">
        <p className="p-16">Looks like your browser isn&apos;t quite sure what to do with my resume... 
        Here&apos;s a <a href="/resume.pdf">link to the PDF</a> instead.</p>
      </object>
    </div>
  );
}
