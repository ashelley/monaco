/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.3.1(undefined)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

define("vs/languages/css/common/cssWorker.nls.fr", {
	"vs/languages/css/common/cssWorker": [
		"@keyframes {0}",
		"@font-face",
		"Renommer « {0} »",
	],
	"vs/languages/css/common/parser/cssErrors": [
		"nombre attendu",
		"condition attendue",
		"at-rule ou sélecteur attendu",
		"point attendu",
		"deux-points attendus",
		"point-virgule attendu",
		"terme attendu",
		"expression attendue",
		"opérateur attendu",
		"identifiant attendu",
		"pourcentage attendu",
		"uri ou chaîne attendu",
		"URI attendu",
		"nom de variable attendu",
		"valeur de variable attendue",
		"valeur de propriété attendue",
		"{ attendue",
		"} attendue",
		"[ attendu",
		"] attendu",
		"( attendue",
		") attendue",
		"virgule attendue",
		"directive ou déclaration de page attendue",
		"at-rule inconnu",
		"mot clé inconnu",
		"sélecteur attendu",
		"littéral de chaîne attendu",
	],
	"vs/languages/css/common/services/intelliSense": [
		"Crée une couleur d\'après les valeurs de rouge, de vert et de bleu.",
		"Crée une couleur d\'après les valeurs de rouge, de vert, de bleu et alpha.",
		"Crée une couleur d\'après les valeurs de teinte, de saturation et de luminosité.",
		"Crée une couleur d\'après les valeurs de teinte, de saturation, de luminosité et alpha.",
	],
	"vs/languages/css/common/services/lint": [
		"\'{0}\'",
		"{0}, \'{1}\'",
		"Toujours définir la règle standard \'@keyframes\' lors de la définition des images clés.",
		"Toujours inclure toutes les règles spécifiques au fabricant : Absent : {0}",
		"Définir également la propriété standard \'{0}\' pour la compatibilité",
		"Toujours inclure toutes les propriétés spécifiques au fabricant : Absent : {0}",
	],
	"vs/languages/css/common/services/lintRules": [
		"Lors de l\'utilisation d\'un préfixe spécifique à un fabricant, toujours inclure également toutes les propriétés spécifiques au fabricant",
		"Lors de l\'utilisation d\'un préfixe spécifique à un fournisseur, ajouter également la propriété standard",
		"Ne pas utiliser de définitions de style en double",
		"Ne pas utiliser d\'ensembles de règles vides",
		"Les instructions d\'importation ne sont pas chargées en parallèle",
		"Ne pas utiliser la largeur ou la hauteur avec une marge intérieure ou une bordure",
		"Le sélecteur universel (*) est connu pour sa lenteur",
		"Aucune unité requise pour zéro",
		"la règle @font-face doit définir les propriétés \'src\' et \'font-family\'",
		"Les couleurs Hex doivent contenir trois ou six chiffres hex",
		"Nombre de paramètres incorrect",
		"Propriété inconnue.",
		"Les hacks IE ne sont nécessaires que si IE7 et versions antérieures sont pris en charge",
		"Propriété spécifique à un fournisseur inconnue.",
		"Propriété ignorée en raison de l\'affichage. Par exemple, avec \'display: inline\', les propriétés width, height, margin-top, margin-bottom et float sont sans effet",
		"N\'utilisez pas !important. Cela indique que la spécificité de l\'intégralité du code CSS est incorrecte et qu\'il doit être refactorisé.",
		"N\'utilisez pas \'float\'. Les éléments Float peuvent fragiliser le code CSS qui est ainsi plus vulnérable si un aspect de la disposition change.",
		"Les sélecteurs ne doivent pas contenir d\'ID, car ces règles sont trop fortement couplées au code HTML.",
		"Active ou désactive toutes les validations",
	]
});