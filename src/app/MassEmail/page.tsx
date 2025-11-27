import EmailForm from '@/components/EmailForm';



export default function MassEmail() {
   
  return (
    <div className='pageLayout'>
        <EmailForm showSupplier={true} showToInput={false} showToCheckbox={true}/>
    </div>
    
  )
}
