/*fonction handleSubmit pour gérer la soumission du formmulaire*/
function handleSubmit(event) {
    //Récupérer l'élément formulaire avec l'identifiant 'contact-form'
    const form = document.getElementById('contact-form');
    //encode l'objet du message du formulaire pour l'inclure dans une URL
    const subject = encodeURIComponent (form.subject.value);
    //Encode le corps du message du formulaire pour l'inclure dans une URL
    const body = encodeURIComponent (
        `nom: ${form.nom.value}\n` + // Récupère et encode le nom de famille
        `Prénom: ${form.Prénom.value}\n` + 
        `Adresse email: ${form.email.value}\n` + 
        `Date de naissance: ${form.date.value}\n` +
        `Formations souhaitées: ${form.formations.value}\n` +
        `Actuellement, vous êtes: ${form.année.value}\n` + 
        `Langues parlées: ${Array.from(form.langues).filter(langue => langue.checked).
            map(langue => langue.value).join(',')}\n\n` + 
        /*form.langues : checkboxes ; Array.from(form.langues): converti checkboxes en un tableau*/
        /*filter(langue =>langue.checked) est vrai*/
        /*map(langue => langue.value): crée un nouveau tableau contenant les valeurs des checkboxes cochées*/
        /*.join(','): les éléments du tableau en une seule chaîne de caractères*/
        `Demande spécifique: \n${form.demande.value}`
    );
    //Rediriger vers lal messagerie
    window.location.href ="mailto: prenom.nom@etud.univ-ubs.fr"
}