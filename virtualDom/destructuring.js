/*jshint esversion: 6 */
const complexUser = {
  info: {
    firstName: 'Alexandre',
    lastName: 'Civilise',
  },
  pro: {
    job: 'développeur',
    company: 'C2S Bouygues',
    techs: ['C#', '.Net', 'TypeScript', 'React', 'JavaScript'],
    contact: {
      phone: '06666666',
      email: 'acivilise@c2s.fr',
    },
  },
};
const firstName = complexUser.info.firstName;
const lastName = complexUser.info.lastName;
const phone = complexUser.pro.contact.phone;
const email = complexUser.pro.contact.email;
const job = complexUser.pro.job;
console.log(`firstName : ${firstName} lastName : ${lastName} phone : ${phone} email : ${email} job : ${job}`);

// 1. Décomposition
// const {
//   info: { firstName, lastName },
//   pro: {
//     job,
//     contact: { phone, email },
//   },
// } = complexUser;

// 2. Réaffectation
const prenom = complexUser.info.firstName;
console.log(`prenom : ${prenom}`);

// const {
//   info: { firstName: prenom },
// } = complexUser;

// 3. Spread operator
// const { info: {firstName, lastName}, ...otherProps} = complexUser;
//   console.log('rest ->' , otherProps);

// 4. arrays
const cSharp = complexUser.pro.techs[0];
const dotNet = complexUser.pro.techs[1];
const typeScript = complexUser.pro.techs[2];
console.log(`CSharp : ${cSharp}, DotNet : ${dotNet}, TypeScript : ${typeScript}`);

// const [cSharp, dotNet, typeScript] = array;
