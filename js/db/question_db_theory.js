var t = [
    {
        domanda: "Date due tabelle A e B legate tra di loro, una inner join (indicata anche come join) tra le due restituirà",
        risposte: [
                "Tutti gli elementi collegati tra loro, escludendo quelli non collegati",
                "Tutti gli elementi di A e tutti quelli di B",
                "Tutti gli elementi di A e gli elementi di B legati ad A"
        ],
        corretta: "Tutti gli elementi collegati tra loro, escludendo quelli non collegati"
    },
    {
        domanda: "Date due tabelle A e B legate tra di loro, una left join tra le due restituirà",
        risposte: [
            "Tutti gli elementi collegati tra loro, escludendo quelli non collegati",
            "Tutti gli elementi di B e gli elementi di A legati ad B",
            "Tutti gli elementi di A e gli elementi di B legati ad A"
        ],
        corretta: "Tutti gli elementi di A e gli elementi di B legati ad A"
    },
    {
        domanda: "Date due tabelle A e B legate tra di loro, una right join tra le due restituirà",
        risposte: [
            "Tutti gli elementi di A e tutti quelli di B",
            "Tutti gli elementi di B e gli elementi di A legati ad B",
            "Tutti gli elementi di A e gli elementi di B legati ad A"
        ],
        corretta: "Tutti gli elementi di B e gli elementi di A legati ad B"
    },
    {
        domanda: "Date due tabelle A e B legate tra di loro, una cross join tra le due restituirà",
        risposte: [
            "Tutti gli elementi di A e tutti quelli di B",
            "Tutti gli elementi di B",
            "Ogni elemento di A unito a tutti gli elementi di B anche se non correlati"
        ],
        corretta: "Ogni elemento di A unito a tutti gli elementi di B anche se non correlati"
    },
    {
        domanda: "Una tabella è in prima forma normale (1FN) se [scelta multipla]",
        risposte: [
            "Ogni riga è identificata in maniera univoca",
            "L'informazione contenuta in ogni colonna è atomica",
            "É in seconda forma normale",
            "É in terza forma normale",
            "Tutti i campi non chiave dipendono dall'intera chiave primaria e non da un suo sottoinsieme - ovvero la chiave primaria deve rappresentare tutta la tabella",
            "Tutti i campi non chiave dipendono dalla chiave primaria e non da altri campi non chiave - ovvero tutte le colonne devono essere logicamente appartenenti alla tabella"
        ],
        corretta: ["Ogni riga è identificata in maniera univoca", "L'informazione contenuta in ogni colonna è atomica"]
    },
    {
        domanda: "Una tabella è in seconda forma normale (2FN) se [scelta multipla]",
        risposte: [
            "Ogni riga è identificata in maniera univoca",
            "L'informazione contenuta in ogni colonna è atomica",
            "É in prima forma normale",
            "É in terza forma normale",
            "Tutti i campi non chiave dipendono dall'intera chiave primaria e non da un suo sottoinsieme - ovvero la chiave primaria deve rappresentare tutta la tabella",
            "Tutti i campi non chiave dipendono dalla chiave primaria e non da altri campi non chiave - ovvero tutte le colonne devono essere logicamente appartenenti alla tabella"
        ],
        corretta: ["É in prima forma normale", "Tutti i campi non chiave dipendono dall'intera chiave primaria e non da un suo sottoinsieme - ovvero la chiave primaria deve rappresentare tutta la tabella"]
    },
    {
        domanda: "Una tabella è in terza forma normale (3FN) se [scelta multipla]",
        risposte: [
            "Ogni riga è identificata in maniera univoca",
            "L'informazione contenuta in ogni colonna è atomica",
            "É in prima forma normale",
            "É in seconda forma normale",
            "Tutti i campi non chiave dipendono dall'intera chiave primaria e non da un suo sottoinsieme - ovvero la chiave primaria deve rappresentare tutta la tabella",
            "Tutti i campi non chiave dipendono dalla chiave primaria e non da altri campi non chiave - ovvero tutte le colonne devono essere logicamente appartenenti alla tabella"
        ],
        corretta: ["É in seconda forma normale", "Tutti i campi non chiave dipendono dalla chiave primaria e non da altri campi non chiave - ovvero tutte le colonne devono essere logicamente appartenenti alla tabella"]
    },
    {
        domanda: "Una transazione è",
        risposte: [
            "Una sequenza di istruzioni atomica, indivisibile ed eseguita come una sola istruzione. O riesce tutta o fallisce interamente",
            "Una tabella virtuale basata sul risultato di una query",
            "Una sequenza di istruzioni SQL salvate e riutilizzabili quante volte si vuole. Permette il passaggio di parametri"
        ],
        corretta: "Una sequenza di istruzioni atomica, indivisibile ed eseguita come una sola istruzione. O riesce tutta o fallisce interamente"
    },
    {
        domanda: "Una view è",
        risposte: [
            "Una sequenza di istruzioni atomica, indivisibile ed eseguita come una sola istruzione. O riesce tutta o fallisce interamente",
            "Una tabella virtuale basata sul risultato di una query",
            "Una sequenza di istruzioni SQL salvate e riutilizzabili quante volte si vuole. Permette il passaggio di parametri"
        ],
        corretta: "Una tabella virtuale basata sul risultato di una query"
    },
    {
        domanda: "Una stored procedure è",
        risposte: [
            "Una sequenza di istruzioni atomica, indivisibile ed eseguita come una sola istruzione. O riesce tutta o fallisce interamente",
            "Una tabella virtuale basata sul risultato di una query",
            "Una sequenza di istruzioni SQL salvate e riutilizzabili quante volte si vuole. Permette il passaggio di parametri"
        ],
        corretta: "Una sequenza di istruzioni SQL salvate e riutilizzabili quante volte si vuole. Permette il passaggio di parametri"
    },
    {
        domanda: "Un IDE (Ambiente di Sviluppo Integrato) è",
        risposte: [
            "Un software che, in fase di programmazione, supporta i programmatori nello sviluppo e debugging del codice sorgente del programma",
            "Un software che ci permette di interagire con il database, ovvero il motore del database",
            "Un insieme di dati stutturati memorizzati in un computer"
        ],
        corretta: "Un software che, in fase di programmazione, supporta i programmatori nello sviluppo e debugging del codice sorgente del programma"
    },
    {
        domanda: "Un DBMS (DataBase Management System) è",
        risposte: [
            "Un software che, in fase di programmazione, supporta i programmatori nello sviluppo e debugging del codice sorgente del programma",
            "Un software che ci permette di interagire con il database, ovvero il motore del database",
            "Un insieme di dati stutturati memorizzati in un computer"
        ],
        corretta: "Un software che ci permette di interagire con il database, ovvero il motore del database"
    },
    {
        domanda: "Un DB (DataBase) è",
        risposte: [
            "Un software che, in fase di programmazione, supporta i programmatori nello sviluppo e debugging del codice sorgente del programma",
            "Un software che ci permette di interagire con il database, ovvero il motore del database",
            "Un insieme di dati stutturati memorizzati in un computer"
        ],
        corretta: "Un insieme di dati stutturati memorizzati in un computer"
    },
    {
        domanda: "SSMS (Sequel Server Management Studio) è",
        risposte: [
            "Un IDE",
            "Un DataBase",
            "Un DBMS"
        ],
        corretta: "Un IDE"
    },
    {
        domanda: "SQLServer è",
        risposte: [
            "Un IDE",
            "Un DataBase",
            "Un DBMS"
        ],
        corretta: "Un DBMS"
    },
    {
        domanda: "Un RDB (Relational DataBase) è",
        risposte: [
            "Un DBNoSQL",
            "Un database basato su documenti",
            "Un database basato su relazioni tra tabelle"
        ],
        corretta: "Un database basato su relazioni tra tabelle"
    },
    {
        domanda: "Un'eccezione è",
        risposte: [
            "Un'interruzione del normale flusso di esecuzione",
            "Un comando SQL che finalizza le operazioni nella transazione",
            "Un comando che riporta il DB allo stato precedente alla transazione, cancellando le operazioni fatte fino a quel momento"
        ],
        corretta: "Un'interruzione del normale flusso di esecuzione"
    },
    {
        domanda: "COMMIT è",
        risposte: [
            "Un'interruzione del normale flusso di esecuzione",
            "Un comando SQL che finalizza le operazioni nella transazione",
            "Un comando che riporta il DB allo stato precedente alla transazione, cancellando le operazioni fatte fino a quel momento"
        ],
        corretta: "Un comando SQL che finalizza le operazioni nella transazione"
    },
    {
        domanda: "ROLLBACK è",
        risposte: [
            "Un'interruzione del normale flusso di esecuzione",
            "Un comando SQL che finalizza le operazioni nella transazione",
            "Un comando che riporta il DB allo stato precedente alla transazione, cancellando le operazioni fatte fino a quel momento"
        ],
        corretta: "Un comando che riporta il DB allo stato precedente alla transazione, cancellando le operazioni fatte fino a quel momento"
    },
    {
        domanda: "Una transazione per rispettare le specifiche ACID deve avere le seguenti caratteristiche: [scelta multipla]",
        risposte: [
            "Atomicity: Le transazioni devono essere atomiche",
            "Consistency: Con le transazioni solo i dati validi vengono salvati",
            "Isolation: Le transazioni non interferiscono tra di loro in caso di concorrenza (più transazioni eseguite nello stesso momento sugli stessi elementi)",
            "Durability: Nelle transazioni dopo il COMMIT i dati scritti non verranno persi",
            "Integrity: Le transazioni ottimizzano le tabelle",
            "Duration: Le transazioni velocizzano le operazioni"
        ],
        corretta: ["Atomicity: Le transazioni devono essere atomiche", "Consistency: Con le transazioni solo i dati validi vengono salvati",
            "Isolation: Le transazioni non interferiscono tra di loro in caso di concorrenza (più transazioni eseguite nello stesso momento sugli stessi elementi)",
            "Durability: Nelle transazioni dopo il COMMIT i dati scritti non verranno persi"
        ]
    },
    {
        domanda: "Le view sono più veloci perchè:",
        risposte: [
            "Il DBMS precalcola un piano di esecuzione, il quale paragona varie versioni della query prendendo la più efficiente",
            "Perchè sono eseguite ad ogni riga della tabella su cui ricercano",
            "Perchè sono atomiche"
        ],
        corretta: "Il DBMS precalcola un piano di esecuzione, il quale paragona varie versioni della query prendendo la più efficiente"
    },
    {
        domanda: "Le funzioni sono più lente perchè:",
        risposte: [
            "Il DBMS precalcola un piano di esecuzione, il quale parana varie versioni della query prendendo la più efficiente",
            "Il DBMS non precalcola un piano di esecuzione, in più in una SELECT vengono eseguite per ogni record della tabella su cui ricercano (n record = n esecuzioni)",
            "Perchè sono atomiche"
        ],
        corretta: "Il DBMS non precalcola un piano di esecuzione, in più in una SELECT vengono eseguite per ogni record della tabella su cui ricercano (n record = n esecuzioni)"
    },
    {
        domanda: "Il linguaggio DDL (Data Definition Language) include le parole chiave:",
        risposte: [
            "Si occupa della gestione del database: CREATE, ALTER, DROP, RENAME, TRUNCATE, COMMENT",
            "Si occupa della gestione delle tabelle: INSERT, UPDATE, DELETE, MERGE, CALL, EXPLAIN PLAN, LOCK TABLE",
            "Si occupa della gestione dei permessi: GRANT, REVOKE"
        ],
        corretta: "Si occupa della gestione del database: CREATE, ALTER, DROP, RENAME, TRUNCATE, COMMENT"
    },
    {
        domanda: "Il linguaggio DQL (Data Query Language) include le parole chiave:",
        risposte: [
            "Si occupa della ricerca nel database: SELECT",
            "Si occupa della gestione dei permessi: GRANT, REVOKE",
            "Si occupa della gestione delle transazioni: TRANSACTION, COMMIT, ROLLBACK"
        ],
        corretta: "Si occupa della ricerca nel database: SELECT"
    },
    {
        domanda: "Il linguaggio DML (Data Manipulation Language) include le parole chiave:",
        risposte: [
            "Si occupa della gestione del database: CREATE, ALTER, DROP, RENAME, TRUNCATE, COMMENT",
            "Si occupa della gestione delle tabelle: INSERT, UPDATE, DELETE, MERGE, CALL, EXPLAIN PLAN, LOCK TABLE",
            "Si occupa della gestione dei permessi: GRANT, REVOKE",
        ],
        corretta: "Si occupa della gestione delle tabelle: INSERT, UPDATE, DELETE, MERGE, CALL, EXPLAIN PLAN, LOCK TABLE"
    },
    {
        domanda: "Il linguaggio DCL (Data Control Language) include le parole chiave:",
        risposte: [
            "Si occupa della ricerca nel database: SELECT",
            "Si occupa della gestione dei permessi: GRANT, REVOKE",
            "Si occupa della gestione delle transazioni: TRANSACTION, COMMIT, ROLLBACK"
        ],
        corretta: "Si occupa della gestione dei permessi: GRANT, REVOKE"
    },
    {
        domanda: "Il linguaggio TCL (Transaction Control Language) include le parole chiave:",
        risposte: [
            "Si occupa della ricerca nel database: SELECT",
            "Si occupa della gestione dei permessi: GRANT, REVOKE",
            "Si occupa della gestione delle transazioni: TRANSACTION, COMMIT, ROLLBACK"
        ],
        corretta: "Si occupa della gestione delle transazioni: TRANSACTION, COMMIT, ROLLBACK"
    },
    {
        domanda: "Cosa fa la constraint PRIMARY KEY in prossimità di una colonna?",
        risposte: [
            "Crea un indice clustered e rende la colonna UNIQUE e NOT NULL",
            "Crea un indice unclustered e rende la colonna UNIQUE e NOT NULL",
            "Crea una relazione one to many tra due colonne di due tabelle diverse, viene inserita nella parte many"
        ],
        corretta: "Crea un indice clustered e rende la colonna UNIQUE e NOT NULL"
    },
    {
        domanda: "Cosa fa la constraint FOREIGN KEY in prossimità di una colonna?",
        risposte: [
            "Crea un indice clustered e rende la colonna UNIQUE e NOT NULL",
            "Crea un indice unclustered e rende la colonna UNIQUE e NOT NULL",
            "Crea una relazione one to one o one to many tra due colonne di due tabelle diverse, nell'ultimo caso viene inserita nella parte many"
        ],
        corretta: "Crea una relazione one to one o one to many tra due colonne di due tabelle diverse, nell'ultimo caso viene inserita nella parte many"
    },
    {
        domanda: "Cosa implica una relazione one-to-one tra due tabelle A e B?",
        risposte: [
            "Un record della tabella A può essere associato ad un solo record della tabella B e viceversa",
            "Un record della tabella A può essere associato a più record della tabella B ma un record della tabella B può essere associato ad un solo record della tabella A",
            "Un record della tabella A può essere associato a più record della tabella B e un record della tabella B può essere associato a più record della tabella A"
        ],
        corretta: "Un record della tabella A può essere associato ad un solo record della tabella B e viceversa"
    },
    {
        domanda: "Cosa implica una relazione one-to-many tra due tabelle A e B?",
        risposte: [
            "Un record della tabella A può essere associato ad un solo record della tabella B e viceversa",
            "Un record della tabella A può essere associato a più record della tabella B ma un record della tabella B può essere associato ad un solo record della tabella A",
            "Un record della tabella A può essere associato a più record della tabella B e un record della tabella B può essere associato a più record della tabella A"
        ],
        corretta: "Un record della tabella A può essere associato a più record della tabella B ma un record della tabella B può essere associato ad un solo record della tabella A"
    },
    {
        domanda: "Cosa implica una relazione many-to-many tra due tabelle A e B?",
        risposte: [
            "Un record della tabella A può essere associato ad un solo record della tabella B e viceversa",
            "Un record della tabella A può essere associato a più record della tabella B ma un record della tabella B può essere associato ad un solo record della tabella A",
            "Un record della tabella A può essere associato a più record della tabella B e un record della tabella B può essere associato a più record della tabella A"
        ],
        corretta: "Un record della tabella A può essere associato a più record della tabella B e un record della tabella B può essere associato a più record della tabella A"
    },
    {
        domanda: "Cosa implica la constraint UNIQUE in prossimità di una colonna?",
        risposte: [
            "Non permette di inserire valori uguali in quella colonna",
            "Non permette di inserire valori NULL in quella colonna",
            "Non permette di inserire valori in quella colonna e la incrementa automaticamente di y a partire da x"
        ],
        corretta: "Non permette di inserire valori uguali in quella colonna"
    },
    {
        domanda: "Cosa implica la constraint IDENTITY(x,y) in prossimità di una colonna?",
        risposte: [
            "Non permette di inserire valori uguali in quella colonna",
            "Non permette di inserire valori NULL in quella colonna",
            "Non permette di inserire manualmente valori in quella colonna e la incrementa automaticamente di y a partire da x"
        ],
        corretta: "Non permette di inserire manualmente valori in quella colonna e la incrementa automaticamente di y a partire da x"
    },
    {
        domanda: "Cosa implica la constraint NOT NULL in prossimità di una colonna?",
        risposte: [
            "Non permette di inserire valori uguali in quella colonna",
            "Non permette di inserire valori NULL in quella colonna",
            "Non permette di inserire valori in quella colonna e la incrementa automaticamente di y a partire da x"
        ],
        corretta: "Non permette di inserire valori NULL in quella colonna"
    },
    {
        domanda: "Un indice CLUSTERED",
        risposte: [
            "Determina il modo in cui i dati vengono fisicamente ordinati all'interno della tabella nel DB, posso dichiararne solo uno all'interno di una tabella",
            "Genera una tabella di lookup, con un ordine diverso rispetto alla tabella, che velocizza le operazioni di lettura. Posso dichiararne n all'interno di una tabella",
            "Genera dei puntatori all'interno della tabella"
        ],
        corretta: "Determina il modo in cui i dati vengono fisicamente ordinati all'interno della tabella nel DB, posso dichiararne solo uno all'interno di una tabella"
    },
    {
        domanda: "Un indice UNCLUSTERED",
        risposte: [
            "Determina il modo in cui i dati vengono fisicamente ordinati all'interno della tabella nel DB, posso dichiararne solo uno all'interno di una tabella",
            "Genera una tabella di lookup, con un ordine diverso rispetto alla tabella, che velocizza le operazioni di lettura. Posso dichiararne n all'interno di una tabella",
            "Genera dei puntatori all'interno della tabella"
        ],
        corretta: "Genera una tabella di lookup, con un ordine diverso rispetto alla tabella, che velocizza le operazioni di lettura. Posso dichiararne n all'interno di una tabella"
    },
    {
        domanda: "Una constraint è",
        risposte: [
            "Un vincolo",
            "Un tipo",
            "Una funzione"
        ],
        corretta: "Un vincolo"
    },
    {
        domanda: "In SQLServer esistono questi tipi:",
        risposte: [
            "TINYINT, SMALLINT, INT, BIGINT, DECIMAL, SMALLMONEY, MONEY, CHAR, VARCHAR, NVARCHAR, TIME, DATE, DATETIME, BIT",
            "BYTE, SHORTINT, INT, LONG, DOUBLE, FLOAT, CHAR, VARCHAR, NVARCHAR, TIME, DATE, DATETIME, BOOL",
            "SHORT, INT, LONG, BIGDECIMAL, STRING, CHAR, VARCHAR, TIME, DATE, DATETIME, BOOL"
        ],
        corretta: "TINYINT, SMALLINT, INT, BIGINT, DECIMAL, SMALLMONEY, MONEY, CHAR, VARCHAR, NVARCHAR, TIME, DATE, DATETIME, BIT"
    },
    {
        domanda: "Le funzioni: [scelta multipla]",
        risposte: [
            "Possono essere scalar-based, ovvero possono ritornare uno scalare",
            "Possono essere table-based, ovvero possono ritornare una tabella",
            "Utilizzano le parentesi tonde per identificare i parametri",
            "Possono non ritornare valori",
            "Possono essere database-based, ovvero possono ritornare un database",
            "Possono essere query-based, ovvero posso ritornare un set di istruzioni"
        ],
        corretta: ["Possono essere scalar-based, ovvero possono ritornare uno scalare",
            "Possono essere table-based, ovvero possono ritornare una tabella",
            "Utilizzano le parentesi tonde per identificare i parametri"
        ]
    },
    {
        domanda: "Le procedure: [scelta multipla]",
        risposte: [
            "Possono essere scalar-based, ovvero possono ritornare uno scalare",
            "Possono essere table-based, ovvero possono ritornare uno scalare",
            "Utilizzano le parentesi tonde",
            "Sono un insieme di istruzioni salvate che accettano parametri",
            "Vengono usate per eseguire operazioni DML su tabelle in relazione tra loro",
            "Pur non usando nè il RETURNS nè il RETURN, possono ritornare il risultato di una SELECT"
        ],
        corretta: ["Sono un insieme di istruzioni salvate che accettano parametri",
            "Vengono usate per eseguire operazioni DML su tabelle in relazione tra loro",
            "Pur non usando nè il RETURNS nè il RETURN, possono ritornare il risultato di una SELECT"
        ]
    },
    {
        domanda: "La subquery:",
        risposte: [
            "Una query nidificata all'interno di un'istruzione o di un'altra query",
            "Una query che ritorna più valori",
            "Una query nidificata il cui unico scopo è sostituire le JOI"
        ],
        corretta: "Una query nidificata all'interno di un'istruzione o di un'altra query"
    }
];
