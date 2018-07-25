(function () {

    let module = {

        id: 0,
        allReports: new Map(),
        element: null,
        report: (author, description, isReproducible, severity) => {

            this.allReports.set(this.id++, {
                author,
                description,
                isReproducible,
                severity
            })

            this.output();
        },
        setStatus: (id, newStatus) => {

            this.allReports.get(id).status = newStatus;
        },
        remove: (id) => {

            this.allReports.get(id).remove();
        },
        sort: (criteria) => {

            return [...this.allReports].sort((a, b) => {

                if (criteria === 'ID' || !criteria)
                    return a[0] - b[0];
                else
                    a[1][criteria] - b[1][criteria];
            });
        },
        output: (selector) => {

            this.element = $(selector);

            for (let id in this.allReports) {

                let report = this.allReports.get(id);

                this.element.append(
                    $('<div>')
                        .setAttribute(`id`, `report_${id}`)
                        .addClass('report')
                        .append($('<div>')
                            .addClass('body')
                            .append($(`<p>${report.description}</p>`))

                            .append($('<div>')
                                .addClass('title')
                                .append($(`<span>`)
                                    .addClass('author')
                                    .text(`Submitted by: ${report.author}`))
                                .append($(`<span>`)
                                    .addClass('status')
                                    .text(`${report.status} | ${report.severity}`))
                            )
                        )
                )
            }
        }
    }

    return module;

})()

solve();